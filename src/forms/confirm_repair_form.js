[
  {
    "template": "<h3>Confirm Repair Form</h3>"
  },
  {
    "key": "Name",
    "templateOptions": {
      "required": true,
      "label": "Name"
    },
    "type": "input"
  },
  {
    "key": "Phone",
    "templateOptions": {
      "required": false,
      "label": "Phone"
    },
    "type": "input"
  },
  {
    "key": "RequestTime",
    "templateOptions": {
      "label": "Request Time",
      "dateFormat": "yy-mm-dd",
      "required": false
    },
    "type": "date"
  },
  {
    "key": "Address",
    "templateOptions": {
      "required": false,
      "label": "Address"
    },
    "type": "textarea"
  },
  {
    "key": "Reason",
    "templateOptions": {
      "required": false,
      "label": "Reason"
    },
    "type": "textarea"
  },
  {
    "key": "FormApproved",
    "templateOptions": {
      "required": false,
      "label": "Form compiled Successfully",
      "placeholder": "placeholder",
      "valueProp": "value",
      "keyProp": "name",
      "options": [
        {
          "name": "Yes",
          "value": "1"
        },
        {
          "name": "No",
          "value": "0"
        }
      ]
    },
    "type": "radio"
  }
]