import React, { useState } from 'react';
import { Settings } from 'lucide-react';
import { InvoiceSettings } from '../../types/invoice';
import axios from 'axios';

const defaultSettings: InvoiceSettings = {
  font: 'inter',
  primaryColor: '#2563eb',
  showLogo: true,
  showDescription: true,
  showContactDetails: true,
};

export function InvoiceSettingsSection() {
  const [settings, setSettings] = useState<InvoiceSettings>(defaultSettings);

  const applySettings = async () => {
    try {
      const response = await axios.post('/api/invoice/customize', settings);
      console.log('Settings applied:', response.data);

      const pdfResponse = await axios.get('/api/invoice/preview');

    } catch (error) {
      console.error('Error applying invoice settings:', error);
    }
  };

  return (
    <div className="bg-white rounded-lg shadow-xl p-8 max-w-2xl mx-auto mt-8 transition-all duration-300 ease-in-out">
      <div className="flex items-center space-x-3 mb-6">
        <Settings className="w-7 h-7 text-gray-600" />
        <h2 className="text-3xl font-semibold text-gray-800">Invoice Settings</h2>
      </div>

      <div className="space-y-8">

        <div>
          <label className="block text-lg font-medium text-gray-700 mb-3">Font Family</label>
          <select
            value={settings.font}
            onChange={(e) => setSettings({ ...settings, font: e.target.value as InvoiceSettings['font'] })}
            className="w-full p-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 bg-gray-50 text-gray-800"
          >
            <option value="inter">Inter</option>
            <option value="roboto">Roboto</option>
            <option value="arial">Arial</option>
            <option value="sans-serif">Sans-serif</option>
            <option value="serif">Serif</option>
          </select>
        </div>

        <div>
          <label className="block text-lg font-medium text-gray-700 mb-3">Primary Color</label>
          <div className="flex items-center space-x-3">
            <input
              type="color"
              value={settings.primaryColor}
              onChange={(e) => setSettings({ ...settings, primaryColor: e.target.value })}
              className="w-16 h-16 p-1 rounded-full border-2 border-gray-300 cursor-pointer"
            />
            <span className="text-lg text-gray-700">{settings.primaryColor}</span>
          </div>
        </div>

        <div>
          <h3 className="text-lg font-medium text-gray-700 mb-3">Display Options</h3>

          <div className="space-y-4">

            <div className="flex items-center space-x-2">
              <input
                type="checkbox"
                id="showLogo"
                checked={settings.showLogo}
                onChange={(e) => setSettings({ ...settings, showLogo: e.target.checked })}
                className="w-5 h-5 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
              />
              <label htmlFor="showLogo" className="text-sm text-gray-600">Show Company Logo</label>
            </div>

 
            <div className="flex items-center space-x-2">
              <input
                type="checkbox"
                id="showDescription"
                checked={settings.showDescription}
                onChange={(e) => setSettings({ ...settings, showDescription: e.target.checked })}
                className="w-5 h-5 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
              />
              <label htmlFor="showDescription" className="text-sm text-gray-600">Show Product Descriptions</label>
            </div>


            <div className="flex items-center space-x-2">
              <input
                type="checkbox"
                id="showContactDetails"
                checked={settings.showContactDetails}
                onChange={(e) => setSettings({ ...settings, showContactDetails: e.target.checked })}
                className="w-5 h-5 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
              />
              <label htmlFor="showContactDetails" className="text-sm text-gray-600">Show Contact Details</label>
            </div>
          </div>
        </div>


        <div className="pt-6 flex flex-col-2 gap-10 justify-between">
          <button
            onClick={applySettings} 
            className=" py-2 px-3 bg-blue-600 text-white border rounded-md hover:bg-blue-700 transition duration-300"
          >
            Apply Customizations
          </button>

          <button
            onClick={() => setSettings(defaultSettings)}
            className="py-2 px-3  bg-gray-100 text-gray-700 border rounded-md hover:bg-gray-200 transition duration-300"
          >
            Reset to Defaults
          </button>
        </div>
      </div>
    </div>
  );
}
