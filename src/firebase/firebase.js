// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore, collection, doc, addDoc, getDoc, getDocs, updateDoc, deleteDoc } from 'firebase/firestore';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: import.meta.env.VITE_FB_API_KEY,
    authDomain: import.meta.env.VITE_FB_AUTH_DOMAIN,
    projectId: import.meta.env.VITE_FB_PROJECT_ID,
    storageBucket: import.meta.env.VITE_FB_STORAGE_BUCKET,
    messagingSenderId: import.meta.env.VITE_FB_MSG_SENDER_ID,
    appId: import.meta.env.VITE_FB_APP_ID
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const db = getFirestore(app);

const loadDB = async () => {
    try {
        const promise = await fetch("./products.json");
        const productos = await promise.json();
        productos.forEach(async prod => {
            const { name, price, shortDesc, fullDesc, img, cat, stock } = prod;
            await addDoc(collection(db, "productos"), {
                name,
                price,
                shortDesc,
                fullDesc,
                img,
                cat,
                stock
            })
        });
        console.log("Datos cargados");
    } catch (error) {
        console.log("Ocurrió un error al cargar los datos");
    }

};

const getProducts = async () => {
    try {
        const productos = await getDocs(collection(db, "productos"));
        const items = productos.docs.map(prod => ({ ...prod.data(), id: prod.id }));
        return items;
    } catch (error) {
        console.log("Ha ocurrido un error");
    }
};

const getProduct = async id => {
    try {
        const product = await getDoc(doc(db, "productos", id));
        const item = { ...product.data(), id: product.id }
        return item;
    } catch {
        console.log("Ha ocurrido un error");
    }

};

const updateProduct = async (id, data) => {
    try {
        await updateDoc(doc(db, "productos", id), data);

    } catch (error) {
        console.log("Ha ocurrido un error");
    }
};

const deleteProduct = async id => {
    try {
        await deleteDoc(doc(db, "productos", id));
    } catch (error) {
        console.log("Ha ocurrido un error");
    }
}

const createOrder = async (cliente, productos, total, fecha) => {
    try {
        const order = await addDoc(collection(db, "ordenCompra"), {
            cliente,
            productos,
            total,
            fecha
        });
        return order;
    } catch (error) {
        console.log("Ha ocurrido un error");
    }
}

const getOrder = async id => {
    try {
        const orderResult = await getDoc(doc(db, "ordenCompra", id));
        const order = { ...orderResult.data(), id: orderResult.id }
        return order;
    } catch {
        console.log("Ha ocurrido un error");
    }
};

export { loadDB, getProducts, getProduct, updateProduct, deleteProduct, createOrder, getOrder };