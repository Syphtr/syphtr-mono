import { Injectable } from '@nestjs/common';
import { HttpService } from '@nestjs/axios';

@Injectable()
export class MailService {
  constructor(private httpService: HttpService) {}
  async subscribeToMailingList(email: string) {
    try {
      const response = await this.httpService.post(
        'https://api.mailerlite.com/api/v2/groups/114095178208249642/subscribers',
        { email },
        {
          headers: {
            'Content-Type': 'application/json',
            'X-MailerLite-ApiKey':
              'eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJhdWQiOiI0IiwianRpIjoiNzlhZjM0ZTNhMTVjYzI2MmJkZjVmODhmNDVkMWEyZjdkMmM2ZWYwYWRjYjc0YzgwZmJhOWRkMjRiOGNlM2E0M2NiZTUwNDJiZjVlYWQ1ZDgiLCJpYXQiOjE3MDg4MDk3NzIuNDkzODAzLCJuYmYiOjE3MDg4MDk3NzIuNDkzODA1LCJleHAiOjQ4NjQ0ODMzNzIuNDkwNzg3LCJzdWIiOiI4NTIxOTUiLCJzY29wZXMiOltdfQ.G7lNkKsCciFJeYJtLe4QY6wzeyLVoOy-IVpxPdAL7oDoaGC_lp7QXaCjGdKUcrGeFytblb6ct0oBPap7R4ilnOl3O7RXZwtlzT2Ze0-kIAheZC0KLzgoet6TGNOMhpRywOGhwK6bdVdb2nfuozfsFHIJBtESq4hObH1iRrHqZeMPpuMTVHnUc_Z3MxgX9-hGHzVh_gSLJPl-HSkpCJzJ-NP7sw6F5vZ4pUGk7XTavC9jW-S1KolqClIugyELipec3PEnu7flgCi4DceGtVX-RHEGYvXN-xKdJawfnHs5axRpOI5suMk7qhcsCtu92JULCDQH6fvwnQrqh7M2l6D3rpnwoEt8vIyhPIDjIWjI9ABF1PTfRLpw4OL9lPw0XySE3cpemlEeBRkHFD8f-WajOJtvaS5ofdWCwIj9e7YJwfrjwfwPpynToLzspqqjeOLM06u3NEH-kvNXbPGJ8IISj9CH3QN6Hkrx1WnocmnR9QPDjKtZf4xdrRSJB09oCl2TvjNl8Q0RDorY6r61v-k2uBbwg6EXAaGhE59khqzmmaT6A-bfFB9oabe1vemNMLfcafdAsSMof0XGf9vcO0_3YzK5wdi8sT74TxXoJVc6lnao7sxYKj1LJefCGzlj-ycnLmKSBLqg44xEQir8A9zhZZ55ijPbtHaksKJkjA49i4M',
          },
        },
      );
      return response.toPromise().then((res) => res.data);
    } catch (error) {
      throw error.response.data;
    }
  }
}
