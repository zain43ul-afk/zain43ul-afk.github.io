# Optional Google Analytics setup

Analytics is deliberately inactive in this release. The portfolio never loads Google Analytics until both conditions are met:

1. A valid GA4 Measurement ID is configured.
2. The visitor explicitly accepts the analytics preference banner.

## Activate it

1. Create or choose a GA4 web data stream for the final portfolio domain.
2. Copy its Measurement ID, which begins with `G-`.
3. In `index.html`, replace the empty value below with that real ID:

   ```html
   <meta name="google-analytics-id" content="" />
   ```

4. Publish the update, accept analytics in a private-browser test, and verify it with Google Tag Assistant or the GA4 Realtime report.

The implementation disables Google Signals and ad-personalization signals, and records only page views plus clicks on explicitly tagged portfolio actions such as CV downloads, contact links, source-code links, and case-study links.

Official implementation reference: <https://developers.google.com/tag-platform/gtagjs>
