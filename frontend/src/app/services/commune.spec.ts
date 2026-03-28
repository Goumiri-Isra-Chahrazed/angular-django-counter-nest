import { TestBed } from '@angular/core/testing';
import { provideHttpClientTesting, HttpTestingController } from '@angular/common/http/testing';
import { Commune } from '../models/commune';
import { CommuneService } from './commune';
import { environment } from '../../environments/environment';

describe('CommuneService', () => {
  let service: CommuneService;
  let httpMock: HttpTestingController;
  const baseUrl = environment.apiUrl;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        CommuneService,
        provideHttpClientTesting(),
      ],
    });

    service = TestBed.inject(CommuneService);
    httpMock = TestBed.inject(HttpTestingController);
  });

  afterEach(() => {
    httpMock.verify();
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('getCommunes() should return a list of communes', () => {
    const mockCommunes: Commune[] = [
      { name: 'Paris', postcode: '75001' },
      { name: 'Melun', postcode: '77000' },
    ];

    service.getCommunes().subscribe((data) => {
      expect(data.length).toBe(2);
      expect(data).toEqual(mockCommunes);
    });

    const req = httpMock.expectOne(baseUrl);
    expect(req.request.method).toBe('GET');
    req.flush(mockCommunes);
  });

  it('checkPostcode() should return exists=true for Melun', () => {
    const postcode = '77000';
    const mockResponse = { exists: true };

    service.checkPostcode(postcode).subscribe((res) => {
      expect(res.exists).toBe(true);
    });

    const req = httpMock.expectOne(`${baseUrl}${postcode}/`);
    expect(req.request.method).toBe('GET');
    req.flush(mockResponse);
  });

  it('checkPostcode() should return exists=false for unknown postcode', () => {
    const postcode = '12345';
    const mockResponse = { exists: false };

    service.checkPostcode(postcode).subscribe((res) => {
      expect(res.exists).toBe(false);
    });

    const req = httpMock.expectOne(`${baseUrl}${postcode}/`);
    expect(req.request.method).toBe('GET');
    req.flush(mockResponse);
  });
});
