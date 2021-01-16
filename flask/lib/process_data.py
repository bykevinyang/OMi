import os
import csv
import json

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

    print(len(diseases))
    if len(diseases) == 2:
        tmp_sym = []
        tmp_sym2 = []
        for i in diseases[0]:
            if i == 'disease' or i == '':
                pass
            else:
                tmp_sym.append(r[i].title())
        for i in diseases[1]:
            if i == 'disease' or i == '':
                pass
            else:
                tmp_sym2.append(r[i].title())

        print('-' * 50)
        if tmp_sym == tmp_sym2:
            print('-' * 60)
            return [diseases[0]['disease'].title(), diseases[1]['disease'].title()]
        else:
            print('-' * 80)
            return symptoms, False
    elif len(diseases) != 1:
        return symptoms, False
    else:
    #    os.remove('logs/data.json')
        return diseases[0]['disease'].title(), True
