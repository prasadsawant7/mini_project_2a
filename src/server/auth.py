from passlib.context import CryptContext
from twilio.rest import Client
from dotenv import load_dotenv
import os

pwd_context = CryptContext(schemes=['bcrypt'], deprecated='auto')

def get_hashed_password(password):
    return pwd_context.hash(password)

load_dotenv()

account_sid = os.getenv("TWILIO_ACCOUNT_SID")
auth_token = os.getenv("TWILIO_AUTH_TOKEN")
verify_sid = os.getenv("TWILIO_VERIFY_SID")


client = Client(account_sid, auth_token)

def send_otp(verified_number):
    verification = client.verify.services(verify_sid).verifications.create(to=verified_number, channel='sms')
    print(verification.status)
    return verification

def verify_otp(verified_number, code):
    verification_check = client.verify.services(verify_sid).verification_checks.create(to=verified_number, code=code)
    print(verification_check.status)
    return verification_check.status