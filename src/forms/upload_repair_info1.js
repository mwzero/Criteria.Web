[
  {
    "template": "<h3>Repair Request</h3>"
  },
  {
    "key": "default-textInput-7720",
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
  },
  {
    "template": "<h3>Material Info</h3>"
  },
  {
    "key": "default-multiField-1937",
    "templateOptions": {
      "required": false,
      "label": "horizontal layout",
      "fields": [
        {
          "key": "MaterialName",
          "templateOptions": {
            "required": false,
            "label": "Name"
          },
          "type": "input"
        },
        {
          "key": "MaterialInfo",
          "templateOptions": {
            "required": false,
            "label": "MaterialInfo"
          },
          "type": "input"
        }
      ]
    },
    "type": "multiField"
  },
  {
    "key": "Repaired",
    "templateOptions": {
      "required": false,
      "label": "Repair Successfully",
      "placeholder": "placeholder",
      "valueProp": "value",
      "keyProp": "name",
      "options": [
        {
          "name": "Yes",
          "value": "Yes"
        },
        {
          "name": "No",
          "value": "No"
        }
      ]
    },
    "type": "radio"
  }
]