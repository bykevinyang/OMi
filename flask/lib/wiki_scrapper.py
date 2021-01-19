import requests
from bs4 import BeautifulSoup
import re

def grabURL(searchTerm):

  try:
    S = requests.Session()

    API = "https://en.wikipedia.org/w/api.php"

    PARAMS = {
      "action": "opensearch",
      "namespace": "0",
      "search": searchTerm,
      "limit": "1",
      "format": "json" 
    }

    R = S.get(url=API, params=PARAMS)
    DATA = R.json()
    return(DATA[-1])

  except:
    return("No wiki site found")

# Driver code:
# grabURL("hypercholesterolemia")

def grabSummary(url):
  r = requests.get("https://en.wikipedia.org/api/rest_v1/page/summary/Amsterdam")
  page = r.json()

  return (page["extract"])

# Driver code:
# grabSummary(site_url)

def grabInfoBox(url, keyword):

  current_position = 0
  final_position = 0
 
  website_url = requests.get(url).text
  soup = BeautifulSoup(website_url,"lxml")

  table = soup.find("table",{"class":"infobox"}) # Wikipedia keeps information in infobox under table, class infobox

  info_row = table.findAll('tr')

  for html in info_row:
    if keyword in str(html):
      final_position = current_position
      current_position += 1
    else:
      current_position += 1
  
  row_description = info_row[final_position].find('td')
  row_description = row_description.get_text()

  row_description = re.sub("[\(\[].*?[\)\]]", "", row_description)

  return(row_description)

# Driver code:
# site_url = "https://en.wikipedia.org/wiki/Influenza"
#search_word = "Medication"

# grabInfoBox(site_url, search_word)