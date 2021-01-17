import os
import csv
import json


csv_path = 'Data/csv'
json_path = 'Data/json'


# Converts the csv diseases data to json format to be easier to read and work with.
def convert_csv_to_json():
    data = []
    with open(f'{csv_path}/dataset.csv') as csv_file:
        csv_reader = csv.DictReader(csv_reader)
        for row in csv_reader:
            data.append(row)

    with open(f'{json_path}/dataset.json', 'w') as json_file:
        json.dump(data, json_file, indent=4)


# Makes sure that the data file is not opened everytime the website is visited.
def find_disease_helper():
    with open(f'{json_path}/dataset.json') as json_file:
        data = json.load(json_file)
    return data

# Generates symptops list to be used in an autocomplete search bar.
def autocomplete_symptoms():
    # Makes sure the data is processed and converted to json.
    if not os.path.exists(f'{json_path}/dataset.json'):
        convert_csv_to_json()
    else:
        pass

    autocomplete_data = []
    with open(f'{json_path}') as json_file:
        data = json.load(json_file)
    symptoms = []
    for row in data:
        for item in row:
            if item == 'disease' or item == '':
                pass
            else:
                symptoms.append(row[item].title())
    symptoms = list(dict.fromkeys(symptoms))

    x = 0
    for item in symptoms:
        tmp_dict = {}
        tmp_dict['id'] = str(x)
        tmp_dict['name'] = item
        autocomplete_data.append(tmp_dict)
        x=+1
    return autocomplete_data

# Algorithm to find the disease and generate symptops.
def find_disease(disease_data, user_symptoms):
    if not os.path.exists(f'{json_path}/dataset.json'):
        convert_csv_to_json()
    else:
        pass

    diseases = []
    tmp_diseases = []
    symptoms = []

    if len(user_symptoms) == 1:
        for row in data:
            for item in row:
                if item == 'disease' or item = '':
                    pass
                else:
                    if user_symptoms[0] == row[item]:
                        diseases.append(row)
                    else:
                        pass

        for row in diseases:
            for item in row:
                if item == 'disease' or item == '':
                    pass
                else:
                    symptoms.append(row[item].title())

    else:
        with open(f'logs/data.json', 'r') as json_file:
            diseases = json.load(json_file)

        for row in diseases:
            for item in row:
                if item == 'disease' or item == '':
                    pass
                else:
                    if user_symptoms[-1] == row[i]:
                        tmp_diseases.append(row)

        diseases = tmp_diseases
        with open(f'logs/data.json', 'w') as json_file:
            json.dump(diseases, json_file, indent=4)


        for row in diseases:
            for item in row:
                if item == 'disease' or item == '':
                    pass
                else:
                    symptoms.append(row[item].title())

        symptoms = list(dict.fromkeys(symptoms))
        with open(f'logs/data.json', 'w') as json_file:
            json.dump(diseases, json_file, indent=4)


    if len(diseases) == 2:
        tmp_sym = []
        tmp_sym2 = []

        for item in diseases[0]:
            tmp_sym.append(diseases[0][item].title())

        for item in diseases[1]:
            tmp_sym2.append(diseases[1][item].title())

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

            return disease_info, True
        else:
            return symptoms, False

    elif len(diseases) != 1:
        symptoms_info = {'symptoms' : symptoms}
        return symptoms_info, False

    else:
        disease_name = diseases[0]['disease'].title()
        wiki_info = search_wiki(disease_name)
        disease_info = {'disease' : disease_name,
                        'description' : wiki_info[0],
                        'url' : wiki_info[1]
        }
        return disease_info, True
