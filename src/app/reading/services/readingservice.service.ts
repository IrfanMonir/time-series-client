import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ReadingserviceService {
  baseUrl = environment.apiIurl + "//Building​//GetBuildingList";
  baseUrl_ = this.baseUrl.replace(/[?&]$/, "");



  constructor(private http: HttpClient) { }



  getBuildingData(): Observable<any> {
    return this.http.get<any[]>("https://localhost:44344/api/Building/GetBuildingList", {
    });
  }
  GetObjectData(): Observable<any> {
    return this.http.get<any[]>("https://localhost:44344/api/Objects/GetObjectList", {
    });

  }
  GetDataField(): Observable<any> {
    return this.http.get<any[]>("https://localhost:44344/api/DataFields/GetDataFieldList", {
    });

  }

  GetReadingData(buildingId:number,ObjectId:number,dataId:number,fData:Date,tDate:Date): Observable<any>{
    return this.http.get<any[]>("https://localhost:44344/api/Reading/GetReadingList?buildingId="+Number(buildingId)+"&& objectId="+Number(ObjectId)+" && dataFieldId="+Number(ObjectId)+" && startTime="+null+" && endTime="+null, {
    });
  }

  GetReadingAllData(): Observable<any>{
    return this.http.get<any[]>("https://localhost:44344/api/Reading/GetAllReadingData", {
    });
  }
}
