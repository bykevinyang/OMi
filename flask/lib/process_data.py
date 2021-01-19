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
    symptoms = list(set(symptoms))

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

    tmp_symptoms = list(set(tmp_symptoms))
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
