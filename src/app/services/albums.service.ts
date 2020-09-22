import { Injectable } from "@angular/core";
import { AngularFirestore } from "@angular/fire/firestore";

@Injectable({
    providedIn: "root",
})
export class AlbumsService {
    constructor(private firestore: AngularFirestore) {}

    getAlbums() {
        return this.firestore.collection("albums").snapshotChanges();
    }

    createAlbum(data) {
        return new Promise<any>((resolve, reject) => {
            this.firestore
                .collection("albums")
                .add(data)
                .then(
                    (res) => {},
                    (err) => reject(err)
                );
        });
    }

    editAlbum(data, newData) {
        return this.firestore
            .collection("albums")
            .doc(data.payload.doc.id)
            .set(newData);
    }

    deleteAlbum(data) {
        return this.firestore
            .collection("albums")
            .doc(data.payload.doc.id)
            .delete();
    }
}
