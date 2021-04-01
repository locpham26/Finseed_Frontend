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
            if request.headers.get('X-GitHub-Event') == 'pull request':
                if req_body.get('action') == 'closed' and req_body.get('pull_request').get('merged') and req_body.get('pull_request').get('head').get('ref') == 'qa':
                    return {
                        "success": deploy(),
                    }
            elif request.headers.get('X-GitHub-Event') == 'push':
                if req_body.get('ref') == 'refs/head/qa':
                    return {
                        "success": deploy()
                    }
        except:
            traceback.print_exc()
    return {
        "success": False
    }

if __name__ == "__main__":
    app.run(host='0.0.0.0', port=9696)