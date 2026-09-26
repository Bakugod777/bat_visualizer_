# 🚀 Deployment Checklist - Bathroom Visualizer v2.0

## Pre-Deployment (Local Testing)

### Code Quality
- [ ] Run `npm run build` - should complete without errors
- [ ] Run `npm run lint` - should show no warnings
- [ ] Verify TypeScript: `tsc --noEmit` - no type errors
- [ ] Test in dev: `npm run dev` - site loads correctly

### Features Testing
- [ ] Complete a full bathroom estimate
- [ ] EstimatePreview appears on desktop (not mobile)
- [ ] Price range updates in real-time as selections change
- [ ] Switch between different regions - prices adjust correctly
- [ ] Reload page - estimate is restored from localStorage
- [ ] Clear localStorage - fresh start works correctly
- [ ] PDF generation works (if available)

### Mobile Testing
- [ ] Test on phone/tablet (iOS and Android)
- [ ] No EstimatePreview on mobile (as designed)
- [ ] All steps accessible and usable
- [ ] Images load correctly
- [ ] No layout issues

### Performance
- [ ] Core Web Vitals: LCP, FID, CLS acceptable
- [ ] Image optimization verified
- [ ] localStorage not exceeding quota
- [ ] No console errors (F12)

### Accessibility
- [ ] Keyboard navigation works
- [ ] Screen reader compatible
- [ ] Color contrast meets WCAG AA
- [ ] Focus indicators visible

---

## Database / Backend (if applicable)

- [ ] Database schema updated (if needed)
- [ ] Migration scripts ready
- [ ] Backup of current data taken
- [ ] Environment variables configured

---

## Deployment Configuration

### .env.local / Environment Variables
```
# Production must have:
UNSPLASH_ACCESS_KEY=xxx                    # Optional but recommended
NEXT_PUBLIC_BUSINESS_NAME=Paint Power
NEXT_PUBLIC_BUSINESS_PHONE=+1-555-...
NEXT_PUBLIC_BUSINESS_EMAIL=...@paintpower.net
```

### Vercel Deployment (Recommended)
- [ ] Repository connected to Vercel
- [ ] Production branch set (main)
- [ ] Environment variables added in Vercel dashboard
- [ ] Build command: `npm run build` (default)
- [ ] Start command: `npm run start` (default)

### Plesk Deployment (Node.js / Passenger)
- [ ] Confirm the hosting plan has the Plesk Node.js extension enabled
- [ ] Select Node.js 22 LTS (the project supports Node.js 20.9 through 22.x)
- [ ] Set the application root to the repository/project root
- [ ] Set the startup file to `app.js`
- [ ] Set `NODE_ENV` to `production` in the Plesk Node.js settings
- [ ] Install dependencies from the application root with `npm ci --include=dev`
- [ ] Build the Next.js production output with `npm run build`
- [ ] Restart the Node.js application from Plesk
- [ ] Open the domain over HTTPS and verify the home page, estimator, and static images

### Alternative Hosting (Hostinger, AWS, etc)
- [ ] Server meets Node.js 18+ requirement
- [ ] Port 3000 available (or configured)
- [ ] Build process tested on server
- [ ] Environment variables set on server

---

## Pre-Launch Verification

### Critical Path
- [ ] Home page loads
- [ ] Can select renovation items
- [ ] Can proceed through all steps
- [ ] Estimate calculates correctly
- [ ] Regional pricing works
- [ ] Data persists on reload

### Secondary Features
- [ ] Gallery images display
- [ ] Navigation between pages works
- [ ] Dark mode toggle works (if enabled)
- [ ] Analytics tracking works (if implemented)
- [ ] Contact form works (if present)

### Third-Party Integrations
- [ ] Unsplash API working (if using API key)
- [ ] Analytics connected (GA, etc)
- [ ] Email service connected (for quotes)
- [ ] Maps/Location service working (if used)

---

## Launch Day Checklist

### 1 Hour Before
- [ ] Do final production build: `npm run build`
- [ ] Verify all environment variables set
- [ ] Check database backups done
- [ ] Monitor logs configured
- [ ] Team notified and ready

### Launch
- [ ] Deploy to production
- [ ] Wait for build to complete
- [ ] Verify deployment successful
- [ ] Check error logs for warnings

### 10 Minutes After
- [ ] Visit production URL
- [ ] Test critical path (select items → estimate)
- [ ] Test on mobile
- [ ] Check browser console for errors
- [ ] Monitor server response time

### 30 Minutes After
- [ ] Test all regional pricing
- [ ] Verify localStorage working
- [ ] Test on different browsers
- [ ] Spot-check analytics
- [ ] Monitor error rates

### 1 Hour After
- [ ] Review error logs
- [ ] Check server CPU/memory usage
- [ ] Verify Sentry/error tracking (if used)
- [ ] Test contact/quote functionality
- [ ] Monitor user activity

---

## Post-Launch Monitoring

### Daily (First Week)
- [ ] Check error logs
- [ ] Monitor response times
- [ ] Track user conversion funnel
- [ ] Monitor storage usage (localStorage)
- [ ] Verify no data corruption

### Weekly (First Month)
- [ ] Review analytics
- [ ] Check user feedback
- [ ] Monitor performance trends
- [ ] Review database size
- [ ] Verify backups working

### Ongoing
- [ ] Set up alerts for errors
- [ ] Monitor key metrics
- [ ] Regular security updates
- [ ] Performance optimization
- [ ] User feedback review

---

## Rollback Plan (If Issues Occur)

### Immediate Actions
- [ ] Switch traffic back to previous version (if applicable)
- [ ] Or re-deploy from last known good commit
- [ ] Notify team and users

### Git Rollback
```bash
git revert <commit-hash>
# or
git reset --hard <previous-version-tag>
npm run build
npm run start
```

### Database Rollback (if applicable)
```bash
# Restore from pre-deployment backup
# Steps depend on your database
```

---

## Known Limitations & Notes

⚠️ **Important:**
- EstimatePreview only shows on desktop (by design)
- localStorage not available in incognito mode (expected)
- Price multipliers are estimates only
- Final pricing determined during consultation

📝 **Regional Pricing Note:**
If any region pricing needs adjustment, edit:
`lib/calculate-estimate.ts` → `REGIONAL_MULTIPLIERS`

🖼️ **Image Downloads:**
If images failed to download, run:
```bash
npm run download-images
# Requires internet connection
```

---

## Team Communication

### Notify
- [ ] Development team
- [ ] QA/Testing team
- [ ] Product/Business team
- [ ] Support/Customer service team
- [ ] Infrastructure/DevOps team

### Message Template
```
Subject: Paint Power Bathroom Estimator v2.0 - Production Deploy

Features:
✨ Auto-save estimates (localStorage persistence)
✨ Real-time price preview in sidebar
✨ Regional pricing adjustments (10 regions)
✨ 60+ bathroom reference images

Status: LIVE on https://[your-domain]

Timeline: [Deployment time] UTC
Expected downtime: None
Rollback plan: Available

Questions? #tech-team or @[contact]
```

---

## Success Metrics

Monitor these KPIs post-launch:

| Metric | Target | Current |
|--------|--------|---------|
| Page Load Time | <2s | |
| Error Rate | <0.1% | |
| Estimate Completion Rate | >70% | |
| Regional Price Accuracy | 100% | |
| localStorage Success | 99% | |
| Mobile Usability | >80% | |
| User Feedback Score | >4.5/5 | |

---

## Documentation Links

- 📖 README.md - User documentation
- 🔧 IMPROVEMENTS.md - Technical details
- 🚀 IMPLEMENTATION_SUMMARY.md - Deployment info
- 📝 GIT_COMMIT_MESSAGE.txt - Changes summary

---

## Final Approval

- [ ] Technical Lead: _______________  Date: _______
- [ ] Product Owner: _______________  Date: _______
- [ ] QA Lead: _______________  Date: _______
- [ ] DevOps: _______________  Date: _______

---

**Ready to Deploy:** ☐ YES  ☐ NO  ☐ WITH CAVEATS

**Caveats (if applicable):**
[Space for notes]

---

**Deployment Date:** _________  
**Deployed By:** _________  
**Monitoring Dashboard:** [Link]  
**Rollback Contact:** _________

---

Last Updated: September 2026
Version: 2.0 (Production Ready)
