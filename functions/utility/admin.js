const admin = require('firebase-admin');
admin.initializeApp({
  credential: admin.credential.cert({
    clientEmail:
      'firebase-adminsdk-wvb8s@socialapp-c3baf.iam.gserviceaccount.com',
    privateKey:
      '-----BEGIN PRIVATE KEY-----\nMIIEvgIBADANBgkqhkiG9w0BAQEFAASCBKgwggSkAgEAAoIBAQDaRZKCeSghjQdr\nBwLOahpKjQXEMHZoQPkLv+q9DzKVi2NxkLvYg+1++te0fHxhG3r2D68iWnw8GpE3\nYXQMyZyfbSTZMpR1UrFGfWsMmpFit+dBCtSZpuhtdLYSygOPA6uM+8gx4yNrnJbp\nPIVqgbxrli6XKxrL5IACHl0GAc8NaL7nmd/iBLcJD/Thxb9HCNf1f71bDAvnyK+2\nmokgCPMY26KkHLiT/q2ii2OBpAbegEuTEiKbqwX7yuHK/PpPs6nsfe0nQHiNBzio\nZCSFcttOCEiCbNKriRQS1z8xXOuRUuwWxthrfD6FK73Otb0jIRinWGs+/G49zubc\nIabpPaNFAgMBAAECggEAZiDkdwEKinxK6sSqhvt1VsmaV5xXYtt3zAwd4R1BzWAd\nhQ80HZBJKT9ke3I93k/13jkjeH7/Hz5NES0bmDojeyMd+TSl6ylogjN/ybNu8FJd\nNX1EUaqbmU9hO/Ri6uFMPRi4KMN/GMR5hiNHx7hxeaOZJClKjflZ/ePIId3py/sI\nFZCTUOagAHqnkjy393/+EjraxIs1i5SBM16fz0YPOrU+tg1cb/W7/I7vmWqMLMu9\nPzCO6yTWdMzQTs6Z92UBsTGs1xWko18gVQLpPg3/1Dto4lI92IIuuxgyo3G6BxuL\niR3jYkrH7hS9mC1aQVNR3KU3ig+Askr0yqi9oNg01wKBgQDtqcJimJYmDVeKCd3U\nhllZJjtBsK9o7icalMm11AzG8ugyzd5qzjO1GdzHnkxTyPNiunNegUw6TfZ0JtXH\nJ5bjCBziOp2GEImGoDF48u/wivE6TuMPGT1LJeUURkUFJj19RaUncdFQMEtOi67x\nis6JRuwY47bcvS/jHEIOxrAaEwKBgQDrHM0zcxDhmD9pK6E4jc1h0FDcD7Hz2AQP\n8louLKI33xGkYRw+CqHo23lVC20f/7ll3UJk4iqnnex+8TsKrwCN67wxzyIjPJtR\nbm0qWgUS8OmbEP7ab4mD5genjxpxQPtnzpxr3qevjomsF96uhSmJ3wSR+jzd/xpA\n1XqVmsz4RwKBgQCs43B3/x5DIjOLRHAuGWnH84rp15lTEOQ7bv9pmY+N7sjBpIdn\nVQfCd8TnJh3KWYXMTWx91DtasrpVdqbPUNpv38f7Pr629zLET6aNoNSxPLINQ7Pj\nmO3AzBlgbVnqTA4xIkfpcN/eoLM3uV+TcPGcZY588LJm0+2RHk5jp2AWJwKBgEte\ni0WQAHxhQwqi6ubnRkyx7AnvmhtSR1MZXOFqe4Ivp0crvlMBM5AjM00ZAZ19a+CE\nwnD2s7fR/2teR5AQM7xLMqRBA2+KUTwUizhFbVT6F9kW5Kv/j3TR++gyDsb5jt5j\nNG+8C8NSjT221TLbC0rgTGXDc1mzGqZoCQkGe+inAoGBAM0pCCPTKvB9Zdf1iLPK\nIyz7LdRyHFZjKsUqBJr84MPakRmpbxlJYW77hCzXZWklR2CkVHAOdqpnkzTsllp+\n4UPPDHFxHrtx1XeRI7rMGwmKZU4cDVwGbX00kKU6hTJ8h2RbNkqcCK9wbsPr4sf/\ni3T4WYtfrYChieVHG8duGPaP\n-----END PRIVATE KEY-----\n',
    projectId: 'socialapp-c3baf',
  }),
  databaseURL: 'https://socialapp-c3baf.firebaseio.com',
});
const db = admin.firestore();
module.exports = {admin, db};
