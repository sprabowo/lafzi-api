Lafzi API
==================

This REST API allows you to search AlQuran verse using latin pronunciation.

The source of the data [Lafzi NPM Package](https://github.com/sprabowo/lafzi.js) is at https://github.com/sprabowo/lafzi.js<br>
The API is hosted at https://lafzi.vercel.app

## Endpoints

To get a list of search:

    url: /api/?q=kun%20fayakun
    method: GET
    query_string:
    - q
    - page (default: 1)
    - limit (default: 10)
    
    url: /api/?q=iyyakanabudu&limit=5
    method: GET
    query_string:
    - q => find "iyyakanabudu" in Quran 
    - limit => show only five data result
    
    url: /api/?q=fabiayyialairobbikuma&limit=2&page=1
    method: GET
    query_string:
    - q => find "fabiayyialairobbikuma" in Quran 
    - limit => show only two data result
    - page => show only in page one
