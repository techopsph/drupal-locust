# drupal-locust
A library of code snippets for Locust and Drupal sites

# Installation and Requirements
```
pip install locustio pyzmq pyquery beautifulsoup4 pytest faker selenium Jinja2 j2cli-3 

npm install npm
npm install -g phantomjs@2.1.7 casperjs@1.1.1
npm install -g selenium-side-runner
npm install -g chromedriver edgedriver geckodriver iedriver

brew install jq yq
```

# Usage
`locust -f locustfile.py --host=https://dev-ps-loadtest-dummy.pantheonsite.io`

`locust -f locustfile.py --host=https://dev-ps-loadtest-dummy.pantheonsite.io --no-web -c 10 -r 1`

