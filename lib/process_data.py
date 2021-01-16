import os
import csv
import json

csvPath = 'Data/csv'
jsonPath = 'Data/json'

# Converts the csv data into json format to make it easier to use.
def convert_csv_to_json():
    data = []
    with open(f'{csvPath}/dataset.csv') as csvFile:
        csvReader = csv.DictReader(csvFile)
        for row in csvReader:
            data.append(row)

    with open(f'{jsonPath}/dataset.json', 'w') as jsonFile:
        json.dump(data, jsonFile, indent=4)

# Returns a list of all the symptoms
def get_symptoms():
    if not os.path.exists(f'{jsonPath}/dataset.json'):
        convert_csv_to_json()
    else:
        pass

    symptoms = []
    
    with open(f'{jsonPath}/dataset.json') as jsonFile:
        data = json.load(jsonFile)
        for i in data:
            for x in i:
                if x == 'disease' or x == '':
                    pass
                else:
                    symptoms.append(i[x].title())
        symptoms = list(dict.fromkeys(symptoms))

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
        for i in data:
            diseases.append(i['disease'])

    with open('data.json', 'w') as f:
        json.dump(list(diseases), f, indent=4)

    return diseases
