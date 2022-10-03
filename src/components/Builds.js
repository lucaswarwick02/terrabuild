import React, { useState, useEffect } from "react";
import { collection, query, onSnapshot } from 'firebase/firestore';
import PublicBuild from "./PublicBuild";
import { db } from './firebase';
import '../css/Builds.css';

function Builds () {

    const [builds, setBuilds] = useState([]);

    useEffect(() => {
        const q = query(collection(db, 'builds'));
        onSnapshot(q, (querySnapshot) => {
            setBuilds(querySnapshot.docs.map(doc => ({
                id: doc.id,
                data: doc.data()
            })))
        })
    }, []);

    return (
        <div>
            <div className="buildsList">
                {builds.map(build => (<PublicBuild data={build.data} id={build.id} />))}
            </div>
        </div>
    );
}

export default Builds;