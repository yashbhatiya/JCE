import { Contact, Course, InsertContact } from "@shared/schema";

export interface IStorage {
  getCourses(): Promise<Course[]>;
  createContact(contact: InsertContact): Promise<Contact>;
}

export class MemStorage implements IStorage {
  private contacts: Map<number, Contact>;
  private courses: Map<number, Course>;
  private currentContactId: number;

  constructor() {
    this.contacts = new Map();
    this.courses = new Map();
    this.currentContactId = 1;
    
    // Initialize with default courses
    const defaultCourses: Course[] = [
      {
        id: 1,
        name: "Basic Computer",
        description: "Introduction to computers and basic operations",
        duration: "2 months",
        image: "https://images.unsplash.com/photo-1519389950473-47ba0277781c",
      },
      {
        id: 2,
        name: "CCC",
        description: "Course on Computer Concepts",
        duration: "3 months",
        image: "https://images.unsplash.com/photo-1531482615713-2afd69097998",
      },
      {
        id: 3,
        name: "Tally",
        description: "Complete accounting software training",
        duration: "4 months",
        image: "https://images.unsplash.com/photo-1508830524289-0adcbe822b40",
      },
      {
        id: 4,
        name: "DTP",
        description: "Desktop Publishing and design",
        duration: "3 months",
        image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6",
      },
      {
        id: 5,
        name: "C & C++",
        description: "Programming fundamentals in C and C++",
        duration: "6 months",
        image: "https://images.unsplash.com/photo-1518818608552-195ed130cdf4",
      },
      {
        id: 6,
        name: "Python",
        description: "Modern programming with Python",
        duration: "4 months",
        image: "https://images.unsplash.com/photo-1526378800651-c32d170fe6f8",
      },
    ];

    defaultCourses.forEach(course => {
      this.courses.set(course.id, course);
    });
  }

  async getCourses(): Promise<Course[]> {
    return Array.from(this.courses.values());
  }

  async createContact(contact: InsertContact): Promise<Contact> {
    const id = this.currentContactId++;
    const newContact: Contact = {
      ...contact,
      id,
      createdAt: new Date(),
    };
    this.contacts.set(id, newContact);
    return newContact;
  }
}

export const storage = new MemStorage();
