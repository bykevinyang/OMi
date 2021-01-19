import os
import re
import json
import sqlite3
import wikipedia
from pprint import pprint




def check_database():
    if not os.path.exists('Data/sql/users.db'):
        test_json = {'disease' : 'test_disease', '0' : 'test_symptom'}
        conn = sqlite3.connect('Data/sql/users.db')
        cursor = conn.cursor()
        cursor.execute("CREATE TABLE users (id varchar(64), data json)")
        cursor.execute("insert into users values (?, ?)", ['0000', json.dumps(test_json)])
        conn.commit()
        conn.close()
        print('[+] Created users databse.')
    else:
        pass

class User:
    def __init__(self, user_id, main_data, user_symptoms, cursor):
        self.user_id = user_id
        self.main_data = main_data
        self.user_symptoms = user_symptoms
        self.cursor = cursor


    def search_wikipedia(self, disease_name):
        try:
            description = wikipedia.summary(f'{disease_name} (disease)', sentences = 5, auto_suggest=False)
            url = (wikipedia.page(f'{disease_name} (disease)')).url
        except:
            try:
                description = wikipedia.summary(f'{disease_name}', sentences = 5, auto_suggest=False)
                url = (wikipedia.page(f'{disease_name} (disease)')).url
            except :
                description = "Sorry, OMi couldn't find a description for this disease. Heydas. DSAd"
                url = "Wikipedia page not available."

        if description.endswith('.'):

            pass
        else:
            description = description.rsplit('.', 1)[0] + '.'

        return description, url


    def create_user(self, user_id, main_data, user_symptoms, cursor):
        # Creates a list of diseases, symptoms data according to the usesr symptoms and creates a new value for the user in the database.
        new_data = []
        symptoms = []

        for row in main_data:
            for item in row:
                if item == 'disease':
                    pass
                else:
                    try:
                        if user_symptoms == row[item]:
                            new_data.append(row)
                    except:
                        print(user_symptoms)
                        print('-'*100)
                        print(row)
                        pass

        for row in new_data:
            for item in row:
                if item == 'disease':
                    pass
                else:
                    symptoms.append(row[item])

        symptoms = list(set(symptoms))
        self.cursor.execute("insert into users values (?, ?)", [f'{self.user_id}', json.dumps(new_data)])

        return {'symptoms' : symptoms}



    def search_user_data(self, user_id, main_data, user_symptoms, cursor):
        # Search the user data and updates it.
        cursor.execute(f"SELECT data FROM users WHERE id = '{self.user_id}'")
        searched_data = (self.cursor.fetchall())[0][0]
        searched_data = json.loads(searched_data)

        new_data = []
        symptoms = []

        for row in searched_data:
            for item in row:
                if user_symptoms == row[item]:
                    new_data.append(row)

        for row in new_data:
            for item in row:
                if item == 'disease':
                    pass
                else:
                    symptoms.append(row[item])

        self.cursor.execute(f"update users set data = (?) where id = (?)", [json.dumps(new_data), f'{user_id}'])


        print(f'Length: {len(searched_data)}')
        print(f'Length: {len(new_data)}')

        if len(new_data) == 1:
            print('[+] Found disease!')
            disease_name = {'disease_name' : new_data[0]['disease'].title()}
            self.cursor.execute(f"DELETE FROM users WHERE id = '{self.user_id}'")
            return {'disease' : [disease_name]}

        elif len(new_data) == 2:
            tmp_symptoms_1 = []
            tmp_symptoms_2 = []

            for row in new_data:
                for item in row:
                    if item == 'disease':
                        pass
                    else:
                        tmp_symptoms_1.append(row[item])

            for row in new_data:
                for item in row:
                    if item == 'disease':
                        pass
                    else:
                        tmp_symptoms_2.append(row[item])


            if tmp_symptoms_1 == tmp_symptoms_2:
                print('WHAAATTT THEY ARE THE EXACT SAME')
                disease_name_1 = {'disease_name' : new_data[0]['disease'].title()}
                disease_name_2 = {'disease_name' : new_data[1]['disease'].title()}


                self.cursor.execute(f"DELETE FROM users WHERE id = '{self.user_id}'")
                return {'disease' : [disease_name_1, disease_name_2]}

            else:
                symptoms = list(set(symptoms))
                return {'symptoms' : symptoms}

        else:
            # Remove duplicates in symptoms
            symptoms = list(set(symptoms))
            return {'symptoms' : symptoms}



    def search_disease(self):
        #Search for user_id in the database.
        self.cursor.execute("select id from users where id=?", (self.user_id,))
        searched_data = self.cursor.fetchall()
        if searched_data:
            print('[+] User found.')
            return self.search_user_data(self.user_id, self.main_data, self.user_symptoms, self.cursor)

        else:
            print('[+] User not found.')
            return self.create_user(self.user_id, self.main_data, self.user_symptoms, self.cursor)
