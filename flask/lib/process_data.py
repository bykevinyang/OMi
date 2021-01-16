import os
import csv
import json

from pprint import pprint

csvPath = 'flask/Data/csv'
jsonPath = 'flask/Data/json'


def find_disease_helper():
    with open(f'{jsonPath}/dataset.json') as jsonFile:
        data = json.load(jsonFile)
    return data

# Converts the csv data into json format to make it easier to use.

def convert_csv_to_json():
    dict_data = []

    current_dict = {}

    previous_disease = 0
    clock = 1

    max_num_symptoms = 0

    with open(f'{csvPath}/symptom_x_dataset.csv') as csvFile:
        csvReader = csv.reader(csvFile)
        next(csvReader)
        
        for row in csvReader:
     
            disease =  row[0] # Grab data
            symptom = row[1]

            if previous_disease == disease:
                current_dict.update({'disease': disease})

                current_dict.update({clock: symptom})
                clock += 1
            else:
                if clock > max_num_symptoms:
                    max_num_symptoms = clock

                dict_data.append(current_dict)
                clock = 0
                current_dict = {}

            previous_disease = disease
    with open(f'{jsonPath}/dataset.json', 'w') as jsonFile:
        json.dump(dict_data, jsonFile, indent=4)


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
    diseases = []
    diseases_ = []
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
                if symptoms_[-1] == r[i]:
                    diseases_.append(r)
    diseases = diseases_

    with open(f'logs/data.json', 'w') as jsonFile:
        json.dump(diseases, jsonFile, indent=4)

    symptoms = []
    for r in diseases:
        for i in r:
            if i == 'disease' or i == '':
                pass
            else:
                symptoms.append(r[i].title())
    symptoms = list(dict.fromkeys(symptoms))

    if len(diseases) != 1:
        return symptoms, False
    else:
        return diseases[0]['disease'].title(), True
        os.remove(f'{jsonFile}/dataset.json')
