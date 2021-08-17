import { Component, EventEmitter, OnInit, Output } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { Readingmodel } from '../model/readingmodel.model';
import { ReadingserviceService } from '../services/readingservice.service';
import { BsDatepickerConfig } from "ngx-bootstrap/datepicker";

@Component({
  selector: 'app-readingsearch',
  templateUrl: './readingsearch.component.html',
  styleUrls: ['./readingsearch.component.scss']
})
export class ReadingsearchComponent implements OnInit {
  datePickerConfig: Partial<BsDatepickerConfig>;
  readingSearchForm: FormGroup;
  readingmodel: Readingmodel;
  currentDate = null;

  BuildingList: any[] = [];
  ObjectList: any[] = [];
  DataFieldList: any[] = [];
  basicData: any;
  data: any;
  basicOptions: any;
  readDataList: any[] = [];
  valueData: number[] = [];
  labelData: any[] = [];
  //labels= ['January', 'February', 'March', 'April', 'May', 'June', 'July'];
  //saveButtonTitle = "Save";
  constructor(
    public service: ReadingserviceService,

    private fb: FormBuilder,) { }

  // dataVal() {
  //   this._bookstoreService.getBookStoreGroup()
  //     .subscribe(books => {
  //       this.books = books;
  //       let i = 0;
  //       let j = 0;
  //       for (i = 0; i < this.books.length; i++) {
  //         this.labelData.push(this.books[i][j].publisherName.publisherName.toString());
  //         this.valueData.push(this.books[i].length);
  //       }
  //     });
  // }

  // data = {
  //   labels: [this.labelData],
  //   datasets: [{
  //     data: this.valueData,
  //     backgroundColor: [
  //       "#00FFFF",
  //       "#E0FFFF",
  //       "#00FFFF",
  //     ]
  //   }]
  // }

  ngOnInit(): void {
    this.service.GetReadingAllData()
    .subscribe(readDataList => {
      this.readDataList = readDataList as any[];
      console.log(readDataList);
      let i = 0;
      let j = 0;
      for (i = 0; i < this.readDataList.length; i++) {
        this.labelData.push(this.readDataList[i].name);
        this.valueData.push(this.readDataList[i].count);
      }
      //console.log(this.labelData);
      this.data = {
        labels: this.labelData,
        datasets: [{
          data: this.valueData,
          backgroundColor: [
            "#00FFFF",
            "#E0FFFF",
            "#00FFFF",
          ]
        }]
      }
    });

    //   this.basicData = {
    //   labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
    //   datasets: [
    //     {
    //       label: 'First Dataset',
    //       data: [65, 59, 80, 81, 56, 55, 40],
    //       fill: false,
    //       borderColor: '#42A5F5',
    //       tension: .4
    //     },
    //     {
    //       label: 'Second Dataset',
    //       data: [28, 48, 40, 19, 86, 27, 90],
    //       fill: false,
    //       borderColor: '#FFA726',
    //       tension: .4
    //     }
    //   ]
    // };

    this.datePickerConfig = Object.assign(
      {},
      {
        dateInputFormat: "DD/MMM/YYYY",
        containerClass: "theme-dark-blue",
        showWeekNumbers: false,
      }
    );
    this.CreateReadingSearchForm();
    //console.log(this.labels);
    
  }

  CreateReadingSearchForm() {
    if (this.readingmodel) {
      this.readingSearchForm = this.fb.group({
        buildingId: [this.readingmodel.buildingId],
        dataId: [this.readingmodel.dataId],
        objectId: [this.readingmodel.objectId],
        fDate: [this.readingmodel.fDate],
        tDate: [this.readingmodel.tDate]
      });
    }
    else {
      this.onClear();
    }
  }
  onClear(): void {
    this.readingSearchForm = this.fb.group({
      buildingId: [0],
      dataId: [0],
      objectId: [0],
      fDate: [null, this.currentDate],
      tDate: [null],
    });
    //this.saveButtonTitle = "Save";
    this.GetBuildingData();
    this.GetObjcet();
    this.GetDataField();
  }


  GetBuildingData() {
    this.service.getBuildingData().subscribe(res => {
      //console.log(res);
      this.BuildingList = res as any[];

    }, error => {
      console.log(error);
    })
  }

  GetObjcet() {
    this.service.GetObjectData().subscribe(res => {
      //console.log(res);
      this.ObjectList = res as any[];

    }, error => {
      console.log(error);

    })
  }

  GetDataField() {
    this.service.GetDataField().subscribe(res => {
      //console.log(res);
      this.DataFieldList = res as any[];
    }, error => {
      console.log(error);
    })
  }

  Submit() {
    // console.log(this.readingSearchForm.value);
    // this.service.GetReadingData(this.readingSearchForm.controls['buildingId'].value, this.readingSearchForm.controls['buildingId'].value, this.readingSearchForm.controls['buildingId'].value, new Date(), new Date()).subscribe(res => {
    //   this.readDataList = res as any[];
    //   console.log(res);

    // }, error => {

    // })

    this.service.GetReadingData(this.readingSearchForm.controls['buildingId'].value, this.readingSearchForm.controls['buildingId'].value, this.readingSearchForm.controls['buildingId'].value, new Date(), new Date())
      .subscribe(readDataList => {
        this.readDataList = readDataList as any[];
        console.log(readDataList);
        let i = 0;
        let j = 0;
        for (i = 0; i < this.readDataList.length; i++) {
          this.labelData.push(this.readDataList[i].name);
          this.valueData.push(this.readDataList[i].count);
        }
        //console.log(this.labelData);
        this.data = {
          labels: this.labelData,
          datasets: [{
            data: this.valueData,
            backgroundColor: [
              "#00FFFF",
              "#E0FFFF",
              "#00FFFF",
            ]
          }]
        }
      });
  }

 

}


