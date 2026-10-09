import { useState } from 'react';

export default function Settings() {
  const [notifications, setNotifications] = useState(true);

  return (
    <div>
      <h2>Setări</h2>
      <label className="check">
        <input
          type="checkbox"
          checked={notifications}
          onChange={(e) => setNotifications(e.target.checked)}
        />
        Notificări prin email
      </label>
    </div>
  );
}
