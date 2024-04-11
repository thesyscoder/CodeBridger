"""_summary_
    Testcases for default root index.
"""

# import all necessary modules
from fastapi.testclient import TestClient
from main import app

client = TestClient(app=app)

def test_root_index():
    response = client.get("/")
    assert response.status_code ==200
    assert response.json() == {"message":"Welcome to BlogPulse application."}