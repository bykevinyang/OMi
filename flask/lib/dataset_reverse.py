import csv

dataset_path = 'Data\\symptom_x_dataset.csv' # Set path here

dict_data = []

current_dict = {}

previous_disease = 0
clock = 1

max_num_symptoms = 0

with open(dataset_path) as dataset:
    dataset_reader = csv.reader(dataset, delimiter=',')
    next(dataset_reader)

    for row in dataset_reader:

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

csv_columns = ['disease']

for i in range(0, max_num_symptoms): # Create CSV column names 
    csv_columns.append(i)

csv_file = "Data\\sorted_data.csv" # Export file

try:
    with open(csv_file, 'w', newline='') as csvfile: 
        writer = csv.DictWriter(csvfile, fieldnames=csv_columns)
        writer.writeheader() 

        for data in dict_data: # Write list of dict into .csv
            writer.writerow(data)
except IOError:
    print("I/O error")
        




