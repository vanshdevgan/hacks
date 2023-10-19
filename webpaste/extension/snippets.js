[
    {
        "name": "Google URLs",
        "code": "[...document.querySelectorAll('a')].map(n => n.href).filter(url => !url.includes('.google.com'));",
        "onsuccess": "document.location=document.querySelectorAll('a#pnnext')[0].href;" // use autoscroll or scroll to end before clicking webpaste to get all urls 
    },

    {
        "name": "GitHub Code Results",
        "code": "[...document.querySelectorAll('#code_search_results a.text-bold')].map(n=>n.href)",
        "onsuccess": "document.location=document.querySelectorAll('a.next_page')[0].href;"
    },
]
