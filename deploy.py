from flask import Flask, request
import subprocess
import traceback
import threading
import os

app = Flask(__name__)

def deploy():
    try:
        # subprocess.run(['git', 'pull'], check=True, capture_output=True)
        # subprocess.run(['yarn', 'install'], check=True, capture_output=True)
        # subprocess.run(['docker-compose up -d --build'], check=True, capture_output=True)

        os.system('git pull')
        os.system('docker-compose up -d --build')
    except Exception as e:
        print(e)

@app.route('/', methods=['POST'])
def handle_hook():
    if (request.json):
        req_body = request.json
        try:
            if request.headers.get('X-GitHub-Event') == 'pull request':
                if req_body.get('action') == 'closed' and req_body.get('pull_request').get('merged') == True and req_body.get('pull_request').get('head').get('ref') == 'qa':
                    blah = threading.Thread(target=deploy)
                    blah.start()
                    return {
                        "success": True
                    }
            elif request.headers.get('X-GitHub-Event') == 'push':
                if req_body.get('ref') == 'refs/heads/qa':
                    blah = threading.Thread(target=deploy)
                    blah.start()
                    return {
                        "success": True
                    }
        except:
            traceback.print_exc()
    return {
        "success": False
    }

if __name__ == "__main__":
    app.run(host='0.0.0.0', port=9696)