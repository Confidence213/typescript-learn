import { Request, Response } from 'express';

import * as mongoose from 'mongoose';
import { ContactSchema } from '../models/crmModel';

const Contact = mongoose.model('Contact', ContactSchema);

export const addNewContact = (req: Request, res: Response) => {
  const newContact = new Contact(req.body);

  newContact.save((err, contact) => {
    if (err) {
      res.send(err);
    }
    res.json(contact);
  });
};

export const getContacts = (req: Request, res: Response) => {
  Contact.find({}, (err, contact) => {
    if (err) {
      res.send(err);
    }
    res.json(contact);
  });
};

export const getContactWithID = (req: Request, res: Response) => {
  Contact.findById(req.params.contactId, (err, contact) => {
    if (err) {
      res.send(err);
    }
    console.log(contact);
    res.json(contact);
    // Actual data
    for (const item of contact) {
      console.log(item);
    }
    // Position of data
    for (const itemPos in contact) {
      console.log(itemPos);
    }
  });
};

export const updateContact = (req: Request, res: Response) => {
  Contact.findOneAndUpdate(
    { _id: req.params.contactId },
    req.body,
    { new: true },
    (err, contact) => {
      if (err) {
        res.send(err);
      }
      res.json(contact);
    }
  );
};

export const deleteContact = (req: Request, res: Response) => {
  Contact.remove({ _id: req.params.contactId }, (err) => {
    if (err) {
      res.send(err);
    }
    res.json({ message: 'Successfully deleted contact' });
  });
};
