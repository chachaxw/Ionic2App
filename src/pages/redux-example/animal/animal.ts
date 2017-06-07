import { Component, Input, ChangeDetectionStrategy, OnInit } from '@angular/core';
import { NgRedux, dispatch, select, ObservableStore } from '@angular-redux/store';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/combineLatest';

import { IAppState } from '../../../store/model';