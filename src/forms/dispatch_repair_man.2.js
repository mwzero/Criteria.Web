[
  {
    "template": "<h3>Dispatch Repair Request</h3>"
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
    "template": "<h3>Repair Approval</h3>"
  },
  {
    "key": "RepairFormApproved",
    "templateOptions": {
      "required": false,
      "label": "RepairFormApproved",
      "placeholder": "placeholder"
    },
    "type": "input"
  },
  {
    "template": "<h3>Repair Main</h3>"
  },
  {
    "key": "default-multiField-691",
    "templateOptions": {
      "required": false,
      "label": "horizontal layout",
      "fields": [
        {
          "key": "RepName",
          "templateOptions": {
            "required": false,
            "label": "Name"
          },
          "type": "input"
        },
        {
          "key": "RepPhone",
          "templateOptions": {
            "required": false,
            "label": "Phone"
          },
          "type": "input"
        }
      ]
    },
    "type": "multiField"
  }
]