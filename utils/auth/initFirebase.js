import firebase from 'firebase/app'
import 'firebase/auth'

const config = {
    apiKey: "AIzaSyBFjEVL0qZ_AwbVMQwl40pTmYNO-nd6QBc",
    authDomain: "arbetsprov-willandskill-marcel.firebaseapp.com",
    databaseURL: "https://arbetsprov-willandskill-marcel.firebaseio.com",
    projectId: "arbetsprov-willandskill-marcel",
}

export default function initFirebase() {
    if (!firebase.apps.length) {
        firebase.initializeApp(config)
    }
}