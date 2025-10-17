---
sidebar_position: 8
---

# Offline-First Architecture

Solo is designed with an **offline-first** approach, meaning all your data is stored locally on your machine. No cloud accounts, no internet dependency, complete privacy.

## What is Offline-First?

Offline-first means the application works completely without an internet connection. Your data is stored locally and accessible anytime, anywhere.

### Core Principles

1. **Local Storage** – All data lives on your machine
2. **No Cloud Sync** – No data sent to external servers
3. **Instant Access** – No loading from remote servers
4. **Privacy First** – Your API keys never leave your device
5. **Works Anywhere** – Use on planes, trains, or without WiFi

## Benefits of Offline-First

### 🔒 Complete Privacy

Your sensitive data stays private:
- ✅ API keys and tokens stored locally only
- ✅ No cloud accounts or login required
- ✅ No data transmitted to external servers
- ✅ No tracking or analytics on your usage
- ✅ Complete control over your data

### ⚡ Maximum Performance

Local storage means instant access:
- ✅ No network latency
- ✅ Instant load times
- ✅ Fast search and filtering
- ✅ Smooth UI interactions
- ✅ No waiting for cloud sync

### 🌍 Work Anywhere

No internet? No problem:
- ✅ Work on airplanes
- ✅ Use during commutes
- ✅ Test in isolated networks
- ✅ Develop offline
- ✅ No connectivity issues

### 💾 Data Ownership

You control your data:
- ✅ Know exactly where data is stored
- ✅ Easy backup and migration
- ✅ Export anytime you want
- ✅ No vendor lock-in
- ✅ No subscription required

## How Solo Stores Data

### Local Storage Location

Solo stores data in your system's application data directory:

**macOS:**
```
~/Library/Application Support/com.solo.app/
```

**Windows:**
```
C:\Users\{username}\AppData\Roaming\com.solo.app\
```

**Linux:**
```
~/.config/com.solo.app/
```

### What Gets Stored

Solo stores the following data locally:

#### Collections & Requests
- Request configurations (URLs, methods, headers)
- Request bodies and parameters
- GraphQL queries and mutations
- gRPC service definitions
- Folder structure and organization

#### Variables
- Global variables
- Collection variables
- Request-specific variables
- Environment configurations

#### Response History
- Recent response data
- Response headers and metadata
- Timing information
- Status codes

#### Application Settings
- Theme preferences (dark/light mode)
- Keyboard shortcuts
- UI layout preferences
- Update settings

### Storage Format

Data is stored in JSON format:

```json
{
  "collections": [
    {
      "id": "uuid-1",
      "name": "User API",
      "variables": {
        "base_url": "https://api.example.com"
      },
      "requests": [
        {
          "id": "uuid-2",
          "name": "Get User",
          "method": "GET",
          "url": "{{base_url}}/users/{{user_id}}",
          "headers": { ... },
          "body": { ... }
        }
      ]
    }
  ],
  "globalVariables": { ... },
  "settings": { ... }
}
```

## Security Considerations

### Data Encryption

Your local data is protected by:
- **File system permissions** – Only your user account can access
- **OS-level security** – Protected by your OS authentication
- **No network exposure** – Data never transmitted externally

### API Keys and Tokens

Store sensitive credentials safely:
- ✅ Stored in local variables
- ✅ Never sent to Solo servers (there are none!)
- ✅ Protected by OS file permissions
- ✅ Can be encrypted by OS features (FileVault, BitLocker)

### Best Practices

1. **Use full disk encryption**
   - macOS: Enable FileVault
   - Windows: Enable BitLocker
   - Linux: Use LUKS or dm-crypt

2. **Regular backups**
   - Export collections periodically
   - Back up application data folder
   - Keep backups secure

3. **Lock your computer**
   - Use strong passwords
   - Enable auto-lock
   - Require password after sleep

## Backup & Restore

### Manual Backup

Export your data for backup:

1. **Export Collections:**
   - Right-click on collection
   - Select "Export Collection"
   - Save JSON file to backup location

2. **Export All Data:**
   - File → Export All
   - Choose backup location
   - Save complete workspace

3. **Copy Data Folder:**
   - Locate Solo's data folder
   - Copy entire folder to backup
   - Store securely

### Restore from Backup

Restore your data easily:

1. **Import Collections:**
   - Click "Import" button
   - Select JSON file
   - Collections are restored

2. **Restore Data Folder:**
   - Close Solo
   - Replace data folder with backup
   - Restart Solo

### Automated Backups

Set up automatic backups:

```bash
# macOS/Linux backup script
#!/bin/bash
BACKUP_DIR="$HOME/Backups/Solo"
DATA_DIR="$HOME/Library/Application Support/com.solo.app"
DATE=$(date +%Y-%m-%d)

mkdir -p "$BACKUP_DIR"
cp -r "$DATA_DIR" "$BACKUP_DIR/solo-backup-$DATE"
```

Run daily via cron or Task Scheduler.

## Migration & Portability

### Moving to a New Computer

Transfer Solo data easily:

1. **Export Method:**
   - Export all collections
   - Install Solo on new computer
   - Import collections

2. **Direct Transfer:**
   - Close Solo on old computer
   - Copy data folder
   - Paste into new computer's data location
   - Start Solo on new computer

### Syncing Across Devices

Since Solo is offline-first, sync manually:

**Option 1: Export/Import**
- Export on Device A
- Transfer file (USB, email, cloud)
- Import on Device B

**Option 2: Shared Folder**
- Store exports in Dropbox/Google Drive
- Access from any device
- Import when needed

**Option 3: Version Control**
- Export collections as JSON
- Commit to Git repository
- Pull on other devices

:::note
Solo intentionally does not include automatic cloud sync to maintain privacy and offline functionality. Use manual methods above if sync is needed.
:::

## Comparing to Cloud-Based Tools

### Solo (Offline-First)

✅ Complete privacy
✅ Works offline
✅ No account required
✅ Instant performance
✅ No subscription
✅ Data ownership
❌ Manual sync between devices
❌ Manual team collaboration

### Cloud-Based Tools

✅ Automatic sync
✅ Team collaboration features
✅ Access from anywhere
❌ Requires internet
❌ Account required
❌ Monthly subscription
❌ Data on external servers
❌ Privacy concerns

## Data Persistence

### When Data is Saved

Solo automatically saves:
- ✅ When you create a request
- ✅ When you modify a request
- ✅ When you send a request
- ✅ When you change variables
- ✅ When you reorganize collections
- ✅ When you close the application

### No Data Loss

Solo protects against data loss:
- Auto-save on every change
- No "Save" button required
- Instant persistence
- Crash recovery

## Performance Benefits

### Instant Load Times

No cloud means fast loading:

```
Cloud-based:
- Launch: ~3-5 seconds (API call)
- Load workspace: ~2-3 seconds
- Search requests: ~500ms

Solo (Offline):
- Launch: <1 second (local read)
- Load workspace: <200ms
- Search requests: <50ms
```

### Large Workspaces

Handle thousands of requests:
- ✅ 1,000+ requests load instantly
- ✅ Fast search across all data
- ✅ No pagination needed
- ✅ Smooth scrolling
- ✅ No API rate limits

## Working Without Internet

### What Works Offline

Everything except the actual API calls:

✅ **Create and edit requests**
✅ **Organize collections**
✅ **Manage variables**
✅ **Search and filter**
✅ **View past responses**
✅ **Export as cURL**
✅ **Import collections**
✅ **Edit documentation**

❌ **Send HTTP/GraphQL/gRPC requests** (requires network)
❌ **Fetch GraphQL schemas** (requires API access)
❌ **Download updates** (requires internet)

### Offline Workflow

Typical offline usage:

1. **Prepare requests offline:**
   - Create and configure requests
   - Organize into collections
   - Set up variables
   - Write documentation

2. **Test when online:**
   - Connect to network
   - Send requests
   - Verify responses

3. **Review results offline:**
   - Analyze response data
   - Plan next steps
   - Update documentation

## Privacy & Security

### What Solo Never Does

Solo respects your privacy:

❌ No telemetry or analytics
❌ No crash reports sent
❌ No usage tracking
❌ No account creation
❌ No data uploaded
❌ No ads or marketing
❌ No third-party integrations
❌ No license validation calls

### Open Source Transparency

Solo's offline-first approach is verifiable:
- Source code available on GitHub
- No hidden network calls
- Community audited
- Transparent development

## FAQs

### Can I use Solo without internet?

Yes! Solo works completely offline except when actually sending requests to APIs.

### Where is my data stored?

Locally on your computer in the application data directory.

### Can others access my data?

No, data is stored locally and protected by your OS permissions.

### How do I backup my data?

Export collections or copy the data folder to a backup location.

### Can I sync between devices?

Not automatically. Export/import collections manually or use a shared folder.

### Is my data encrypted?

Solo stores data as JSON files protected by OS permissions. Use OS-level encryption (FileVault, BitLocker) for additional security.

### What happens if I lose my data?

If you don't have backups, data is lost. Export collections regularly.

### Can I move to another tool?

Yes! Export collections as JSON or cURL commands to migrate.

## Best Practices

### Regular Exports

Export important collections:
```
Weekly: Export active collections
Monthly: Full workspace backup
Before major changes: Safety backup
```

### Organize for Backup

Structure collections for easy backup:
```
📁 Active Projects (export frequently)
📁 Templates (export once)
📁 Archive (export rarely)
```

### Use Version Control

Track collection changes:
```bash
git init ~/SoloCollections
# Export collections to this folder
git add .
git commit -m "Updated user API endpoints"
git push
```

### Document Everything

Since there's no cloud to search:
- Add descriptions to requests
- Document expected responses
- Note authentication requirements
- Explain variable purposes

## Comparison with Other Approaches

### Offline-First (Solo)

```
User → Solo → Local Storage
        ↓
      API (when needed)
```

Benefits: Privacy, speed, ownership
Trade-offs: Manual sync

### Cloud-First (Traditional)

```
User → Cloud Service → API
            ↓
       Cloud Database
```

Benefits: Sync, collaboration
Trade-offs: Privacy, requires internet

### Hybrid Approach

```
User → App ⇄ Cloud Sync
        ↓         ↓
    Local    Cloud Storage
```

Benefits: Offline + sync
Trade-offs: Complexity, privacy

**Solo chooses offline-first** for maximum privacy and simplicity.

## Next Steps

- [Collections](/docs/collections) – Organize your offline data
- [Variables](/docs/variables) – Manage configurations locally
- [cURL Integration](/docs/curl) – Export for external use
- [Getting Started](/docs/intro) – Learn more about Solo
