import { AfterViewInit, Component, ViewChild } from '@angular/core';
import { CardComponent } from '../../components/card/card.component';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatTableDataSource, MatTableModule } from '@angular/material/table';
import { MatPaginator, MatPaginatorModule } from '@angular/material/paginator';
import { MatSort, MatSortModule } from '@angular/material/sort';
import { DataModel } from '../../../models/data-model';
import { DataConst } from '../../../models/data-model.const';
import { MatInputModule } from '@angular/material/input';
import { NavbarComponent } from '../../components/navbar/navbar.component';

@Component({
    selector: 'app-home',
    standalone: true,
    templateUrl: './home.component.html',
    styleUrl: './home.component.scss',
    imports: [
        CardComponent,
        MatFormFieldModule,
        MatPaginatorModule,
        MatSortModule,
        MatTableModule,
        MatInputModule,
        NavbarComponent
    ]
})
export class HomeComponent implements AfterViewInit {
  dataConst = DataConst;
  filteredData: DataModel[] = DataConst;

  /**
   *
   */
  constructor() {
  }

  ngAfterViewInit() {
  }
}
