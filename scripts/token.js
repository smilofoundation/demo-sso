
/*
  Valid credential response encoded as JWT. Contains 2 verifiable credentials,
  One for email, one for name. You can decode it here: https://jwt.io/
*/

module.exports = {
  token: 'eyJ0eXAiOiJKV1QiLCJhbGciOiJFUzI1NksifQ.eyJjcmVkZW50aWFsUmVzcG9uc2UiOnsic3VwcGxpZWRDcmVkZW50aWFscyI6W3siQGNvbnRleHQiOlsiaHR0cHM6Ly93M2lkLm9yZy9pZGVudGl0eS92MSIseyJwcm9vZiI6Imh0dHBzOi8vdzNpZC5vcmcvc2VjdXJpdHkjcHJvb2YifSx7IlByb29mT2ZFbWFpbENyZWRlbnRpYWwiOiJodHRwczovL2lkZW50aXR5LmpvbG9jb20uY29tL3Rlcm1zL1Byb29mT2ZFbWFpbENyZWRlbnRpYWwiLCJzY2hlbWEiOiJodHRwOi8vc2NoZW1hLm9yZy8iLCJlbWFpbCI6InNjaGVtYTplbWFpbCJ9XSwiaWQiOiJjbGFpbUlkOmIwNzYwMDdhMGIxYWMiLCJuYW1lIjoiRW1haWwgYWRkcmVzcyIsImlzc3VlciI6ImRpZDpqb2xvOmIzMTBkMjkzYWVhYzhhNWNhNjgwMjMyYjk2OTAxZmU4NTk4OGZkZTI4NjBhMWE1ZGI2OWI0OTc2MjkyM2NjODgiLCJ0eXBlIjpbIkNyZWRlbnRpYWwiLCJQcm9vZk9mRW1haWxDcmVkZW50aWFsIl0sImNsYWltIjp7ImVtYWlsIjoiZXVnZW5pdUBqb2xvY29tLmNvbSIsImlkIjoiZGlkOmpvbG86YjMxMGQyOTNhZWFjOGE1Y2E2ODAyMzJiOTY5MDFmZTg1OTg4ZmRlMjg2MGExYTVkYjY5YjQ5NzYyOTIzY2M4OCJ9LCJpc3N1ZWQiOiIyMDE4LTA5LTMwVDExOjUxOjAxLjI2M1oiLCJwcm9vZiI6eyJ0eXBlIjoiRWNkc2FLb2JsaXR6U2lnbmF0dXJlMjAxNiIsImNyZWF0ZWQiOiIyMDE4LTA5LTMwVDExOjUxOjAxLjI2M1oiLCJjcmVhdG9yIjoiZGlkOmpvbG86YjMxMGQyOTNhZWFjOGE1Y2E2ODAyMzJiOTY5MDFmZTg1OTg4ZmRlMjg2MGExYTVkYjY5YjQ5NzYyOTIzY2M4OCNrZXlzLTEiLCJub25jZSI6IjlhMWE1MDgyYzE1OTUiLCJzaWduYXR1cmVWYWx1ZSI6IklvMytwdUhDdjMxWlJmdm4yYnllbTR3ZWt6U2U0U0RYa25SL2VTaXMxQ3BXeC9KaUZndGV0eGNIRDZDK2JOSWdGQjB2Yi9vTi9RWjZIZFZYTjl5VGdnPT0ifX0seyJAY29udGV4dCI6WyJodHRwczovL3czaWQub3JnL2lkZW50aXR5L3YxIix7InByb29mIjoiaHR0cHM6Ly93M2lkLm9yZy9zZWN1cml0eSNwcm9vZiJ9LHsiUHJvb2ZPZk5hbWVDcmVkZW50aWFsIjoiaHR0cHM6Ly9pZGVudGl0eS5qb2xvY29tLmNvbS90ZXJtcy9Qcm9vZk9mTmFtZUNyZWRlbnRpYWwiLCJzY2hlbWEiOiJodHRwOi8vc2NoZW1hLm9yZy8iLCJmYW1pbHlOYW1lIjoic2NoZW1hOmZhbWlseU5hbWUiLCJnaXZlbk5hbWUiOiJzY2hlbWE6Z2l2ZW5OYW1lIn1dLCJpZCI6ImNsYWltSWQ6NzBhYWMxMTk2ODlhIiwibmFtZSI6Ik5hbWUiLCJpc3N1ZXIiOiJkaWQ6am9sbzpiMzEwZDI5M2FlYWM4YTVjYTY4MDIzMmI5NjkwMWZlODU5ODhmZGUyODYwYTFhNWRiNjliNDk3NjI5MjNjYzg4IiwidHlwZSI6WyJDcmVkZW50aWFsIiwiUHJvb2ZPZk5hbWVDcmVkZW50aWFsIl0sImNsYWltIjp7ImZhbWlseU5hbWUiOiJSdXN1IiwiZ2l2ZW5OYW1lIjoiRXVnZW5pdSIsImlkIjoiZGlkOmpvbG86YjMxMGQyOTNhZWFjOGE1Y2E2ODAyMzJiOTY5MDFmZTg1OTg4ZmRlMjg2MGExYTVkYjY5YjQ5NzYyOTIzY2M4OCJ9LCJpc3N1ZWQiOiIyMDE4LTA5LTMwVDExOjUxOjAzLjI1MloiLCJwcm9vZiI6eyJ0eXBlIjoiRWNkc2FLb2JsaXR6U2lnbmF0dXJlMjAxNiIsImNyZWF0ZWQiOiIyMDE4LTA5LTMwVDExOjUxOjAzLjI1MloiLCJjcmVhdG9yIjoiZGlkOmpvbG86YjMxMGQyOTNhZWFjOGE1Y2E2ODAyMzJiOTY5MDFmZTg1OTg4ZmRlMjg2MGExYTVkYjY5YjQ5NzYyOTIzY2M4OCNrZXlzLTEiLCJub25jZSI6ImIxZjhkODU4MDY5MWYiLCJzaWduYXR1cmVWYWx1ZSI6Im9JU0ZWblAvTGhtazZrdHkwQ01QNTIxMmJMREY4czlOUTg2aHE2RzFiNlVMZ2NIeElPQmV6OFFpczVXVStQSzFHdzVaYjQzY3J6aUVjSFV5c0s4UFNBPT0ifX1dfSwidHlwIjoiY3JlZGVudGlhbFJlc3BvbnNlIiwiaWF0IjoxNTM4MzA4MjY0Nzg3LCJpc3MiOiJkaWQ6am9sbzpiMzEwZDI5M2FlYWM4YTVjYTY4MDIzMmI5NjkwMWZlODU5ODhmZGUyODYwYTFhNWRiNjliNDk3NjI5MjNjYzg4I2tleXMtMSJ9.Rpp_Lcd0C3Ol0zysmJtFGON3Mtjn2SESh_h9mMYGiuxi3_cXleKxgbK-Eq8W0Uv5QdbEbJnVOfZwUR_Iq2CQFw'
}
