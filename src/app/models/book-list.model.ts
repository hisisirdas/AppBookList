import { Address } from './address.model';
import { personalInfo } from './personalinfo.model';
export interface booksList {
    bookName: string;
    bookAuthor: string;
    bookUrl: string;
    personalInfo: personalInfo;
}
