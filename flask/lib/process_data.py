import os
import csv
import json
import wikipedia

from pprint import pprint

csvPath = 'Data/csv'
jsonPath = 'Data/json'


def find_disease_helper():
    with open(f'{jsonPath}/dataset.json') as jsonFile:
        data = json.load(jsonFile)
    return data

# Converts the csv data into json format to make it easier to use.
def convert_csv_to_json():
    data = []
    with open(f'{csvPath}/dataset.csv') as csvFile:
        csvReader = csv.DictReader(csvFile)
        for row in csvReader:
            data.append(row)

    with open(f'{jsonPath}/dataset.json', 'w') as jsonFile:
        json.dump(data, jsonFile, indent=4)


def autocomplete_symptoms():
    autocomplete_data = []

    if not os.path.exists(f'{jsonPath}/dataset.json'):
        convert_csv_to_json()
    else:
        pass
    with open(f'{jsonPath}/dataset.json') as jsonFile:
        data = json.load(jsonFile)
    symptoms = []
    for r in data:
        for i in r:
            if i == 'disease' or i == '':
                pass
            else:
                symptoms.append(r[i].title())

    symptoms = list(dict.fromkeys(symptoms))

    x = 0
    for i in symptoms:
        tmp_dict = {}
        tmp_dict['id'] = str(x)
        tmp_dict['name'] = i
        x += 1
        autocomplete_data.append(tmp_dict)
    return autocomplete_data

def get_symptoms():
    with open(f'{jsonPath}/dataset.json') as jsonFile:
        data = json.load(jsonFile)

    tmp_symptoms = []

    for r in data:
        for i in r:
            if i == 'disease' or i == '':
                pass
            else:
                tmp_symptoms.append(r[i].title())

    symptoms = {'symptoms' : tmp_symptoms}
    return symptoms



# Returns a list of all the diseases
def get_diseases():
    if not os.path.exists(f'{jsonPath}/dataset.json'):
        convert_csv_to_json()
    else:
        pass

    diseases = []

    with open(f'{jsonPath}/dataset.json') as jsonFile:
        data = json.load(jsonFile)
        for r in data:
            diseases.append(r['disease'].title())

    return diseases



def search_wiki(name):
    try:
        description = wikipedia.summary(f'{name} (disease)', sentences = 5, auto_suggest=False)
        url = (wikipedia.page(f'{name} (disease)')).url
    except:
        description = "Sorry, OMi couldn't find a description for this disease."
        url = "Wikipedia page not available."

    return description, url

# Algorithm to find the disease
def find_disease(data, symptoms_):
    if not os.path.exists(f'{jsonPath}/dataset.json'):
        convert_csv_to_json()
    else:
        pass

    json_data = []
    diseases = []
    tmp_diseases = []
    symptoms = []

    if len(symptoms_) == 1:
        for r in data:
            for i in r:
                if i == 'disease' or i == '':
                    pass
                else:
                    if symptoms_[0] == r[i]:
                        diseases.append(r)


            for r in diseases:
                for i in r:
                    if i == 'disease' or i == '':
                        pass
                    else:
                        symptoms.append(r[i].title())

        symptoms = list(dict.fromkeys(symptoms))
        with open(f'logs/data.json', 'w') as jsonFile:
            json.dump(diseases, jsonFile, indent=4)
        return symptoms, False

    else:
        with open(f'logs/data.json', 'r') as f:
            diseases = json.load(f)

        for r in diseases:
            for i in r:
                if i == 'disease' or i == '':
                    pass
                else:
                    if symptoms_[-1] == r[i]:
                        tmp_diseases.append(r)

        diseases = tmp_diseases
        with open(f'logs/data.json', 'w') as jsonFile:
            json.dump(diseases, jsonFile, indent=4)

        for r in diseases:
            for i in r:
                if i == 'disease' or i == '':
                    pass
                else:
                    symptoms.append(r[i].title())

    symptoms = list(dict.fromkeys(symptoms))
    with open(f'logs/data.json', 'w') as jsonFile:
        json.dump(diseases, jsonFile, indent=4)

    if len(diseases) == 2:
        tmp_sym = []
        tmp_sym2 = []

        for i in diseases[0]:
            tmp_sym.append(diseases[0][i].title())

        for i in diseases[1]:
            tmp_sym2.append(diseases[1][i].title())

        tmp_sym.pop(0)
        tmp_sym2.pop(0)

        if tmp_sym == tmp_sym2:

            disease_name_1 = diseases[0]['disease'].title()
            disease_name_2 = diseases[1]['disease'].title()
            wiki_info_1 = search_wiki(disease_name_1)
            wiki_info_2 = search_wiki(disease_name_2)
            disease_info_1 = {'disease' : disease_name_1, 'description' : wiki_info_1[0], 'url' : wiki_info_1[1]}
            disease_info_2 = {'disease' : disease_name_2, 'description' : wiki_info_2[0], 'url' : wiki_info_2[1]}
            disease_info = {'disease' : [disease_info_1, disease_info_2]}

            return disease_info, True, []
        else:
            symptoms_info = {'symptoms' : symptoms}
            return symptoms_info, False


    elif len(diseases) != 1:
        symptoms_info = {'symptoms' : symptoms}
        return symptoms_info, False


    else:
        #os.remove('logs/data.json')
        disease_name = diseases[0]['disease'].title()
        wiki_info = search_wiki(disease_name)
        disease_info = {'disease' : disease_name,
                        'description' : wiki_info[0],
                        'url' : wiki_info[1]
        }
        return disease_info, True, []
