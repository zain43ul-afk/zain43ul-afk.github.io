# Custom domain readiness for GitHub Pages

No active `CNAME` file is included because a domain has not yet been confirmed. This keeps the current GitHub Pages address working safely. `CNAME.example` is only a placeholder.

## Safe activation order

1. Buy or confirm ownership of the intended domain.
2. Verify the domain in the GitHub account before attaching it to this repository.
3. In **Repository → Settings → Pages**, enter the custom domain first.
4. Configure DNS with the domain provider.
5. Replace the text in `CNAME.example` with the exact domain, then rename the file to `CNAME`.
6. Update the canonical URL, Open Graph URL/image, JSON-LD URL, `robots.txt`, and `sitemap.xml` from the GitHub address to the custom domain.
7. Wait for DNS checks to pass, then enable **Enforce HTTPS** in GitHub Pages.

## Current GitHub Pages apex records

For an apex/root domain, GitHub currently documents these IPv4 records:

```text
185.199.108.153
185.199.109.153
185.199.110.153
185.199.111.153
```

GitHub also documents these IPv6 records:

```text
2606:50c0:8000::153
2606:50c0:8001::153
2606:50c0:8002::153
2606:50c0:8003::153
```

For `www`, use the DNS target GitHub shows for the repository owner. Do not create wildcard DNS records. DNS changes can take up to 24 hours.

Official references:

- <https://docs.github.com/en/pages/configuring-a-custom-domain-for-your-github-pages-site/managing-a-custom-domain-for-your-github-pages-site?platform=linux>
- <https://docs.github.com/en/pages/configuring-a-custom-domain-for-your-github-pages-site/verifying-your-custom-domain-for-github-pages>
