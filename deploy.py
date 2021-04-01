from flask import Flask, request
import subprocess
import traceback

app = Flask(__name__)

def deploy():
    try:
        subprocess.run(['git pull', 'docker-compose up -d --build'])
        return True
    except:
        traceback.print_exc()
        return False

@app.route('/', methods=['POST'])
def handle_hook():
    print(request.json)
    if (request.json):
        req_body = request.json
        print(req_body)
        try:
            if req_body.get('action') == 'closed' and req_body.get('pull_request').get('merged') and req_body.get('pull_request').get('head').get('ref') == 'production':
                deploy()
            elif req_body.get('action') :
                deploy()
        except:
            traceback.print_exc()

if __name__ == "__main__":
    app.run(port=9696)