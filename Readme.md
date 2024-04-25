```
npm install

cd client
npm install

cd backend
npm install
```

### Step 1: Configure the environment variables

- create the same `.env` in root and /backend, add following variables in both

```
MONGO_URI=<your-mongo-uri>
JWT_SECRET=<jwt-secret>
CLOUDINARY_NAME=<cloudinary-name>
CLOUDINARY_API_KEY=<cloudinary-api-key>
CLOUDINARY_API_SECRET=<cloudinary-api-secret>

```

### Step 2: Once configured navigate to root and run:

```
npm run dev
```
