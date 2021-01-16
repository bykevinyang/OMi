# Convert symptom_x_dataset.csv into JSON format

import csv
import json

csvPath = 'Data/csv'
jsonPath = 'Data/json'

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


#convert_csv_to_json()