import { Injectable } from "@angular/core";
import { Http, Headers, RequestOptions } from "@angular/http";
import "rxjs/add/operator/map";
import { Observable } from "rxjs/Observable";

@Injectable()
export class ProductorService {
    options: RequestOptions;
    constructor(private http: Http) {
        let headers: Headers = new Headers();
        headers.append("Content-Type", "application/json; charset=utf-8");
        headers.append("Cache-Control", "no-cache");
        headers.append("Cache-Control", "no-store");
        headers.append("X-CsrfToken", document.cookie.split("csrftoken=")[1]);
        this.options = new RequestOptions({ headers: headers, withCredentials: true });
    }

    setProductor(productor: any): Observable<string[]> {
        return this.http.post("/productor/service", productor)
            .map(response => <string[]>response.json());

    }

    editarProductor(productor: any, id: number): Observable<string[]> {
        return this.http.post("/productor/editarProductor/" + id, productor)
            .map(response => <string[]>response.json());

    }

    getProductor(): Observable<string[]> {
        return this.http.get("/productor/service")
            .map(response => <string[]>response.json());
        //console.log("texto");

    }

    getSimpleProductor(): Observable<string[]> {
        return this.http.get("/productor/service/simple")
            .map(response => <string[]>response.json());
        //console.log("texto");

    }

    getProd(id: number): Observable<string> {
        return this.http.get("/productor/get/" + id)
            .map(response => <string>response.json());

    }

    enviarCorreo(email: any): Observable<string[]> {
        return this.http.post("/productor/correo", email, this.options).map(response => <string[]>response.json());
    }

    correoActivo(): Observable<string[]> {
        return this.http.get("/productor/correo/active/obtener").map(response => <string[]>response.json());
    }

    activarCorreo(correo: any): Observable<string[]> {
        return this.http.post("/productor/correo/active", correo, this.options).map(response => <string[]>response.json());
    }

    obtenerListaProductos(): Observable<string[]> {
        return this.http.get("/productor/productosLista").map(response => <string[]>response.json());
    }

    obtenerProductorPorUsuario(userId: any): Observable<string[]> {
        return this.http.get("/productor/productorPorUsuario/" + userId).map(response => <string[]>response.json());
    }

    crearNuevaOferta(oferta: any): Observable<string[]> {
        return this.http.post("/productor/productos", JSON.stringify(oferta), this.options).map(response => <string[]>response.json());
    }

    createOrder(order: any): Observable<string[]> {
        return this.http.post("/shop/api/checkoutcompra", JSON.stringify(order), this.options).map(response => <string[]> response.json());
    }
}
