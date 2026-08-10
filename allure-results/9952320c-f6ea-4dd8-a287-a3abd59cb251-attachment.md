# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: navigation.spec.ts >> Navigate through the left panel
- Location: tests\navigation.spec.ts:56:5

# Error details

```
Test timeout of 30000ms exceeded.
```

# Page snapshot

```yaml
- generic [ref=f14e3]:
  - generic:
    - complementary [ref=f14e4]:
      - navigation "Sidepanel" [ref=f14e5]:
        - generic [ref=f14e6]:
          - link [ref=f14e7] [cursor=pointer]:
            - /url: https://www.orangehrm.com/
            - img "client brand banner" [ref=f14e9]
          - text: 
        - generic [ref=f14e10]:
          - generic [ref=f14e11]:
            - generic [ref=f14e12]:
              - textbox "Search" [ref=f14e15]
              - button "" [ref=f14e16] [cursor=pointer]
            - separator [ref=f14e18]
          - list [ref=f14e19]:
            - listitem [ref=f14e20]:
              - link "Admin" [ref=f14e21] [cursor=pointer]:
                - /url: /web/index.php/admin/viewAdminModule
            - listitem [ref=f14e25]:
              - link "PIM" [ref=f14e26] [cursor=pointer]:
                - /url: /web/index.php/pim/viewPimModule
            - listitem [ref=f14e41]:
              - link "Leave" [ref=f14e42] [cursor=pointer]:
                - /url: /web/index.php/leave/viewLeaveModule
            - listitem [ref=f14e46]:
              - link "Time" [ref=f14e47] [cursor=pointer]:
                - /url: /web/index.php/time/viewTimeModule
            - listitem [ref=f14e54]:
              - link "Recruitment" [ref=f14e55] [cursor=pointer]:
                - /url: /web/index.php/recruitment/viewRecruitmentModule
            - listitem [ref=f14e62]:
              - link "My Info" [ref=f14e63] [cursor=pointer]:
                - /url: /web/index.php/pim/viewMyDetails
            - listitem [ref=f14e70]:
              - link "Performance" [ref=f14e71] [cursor=pointer]:
                - /url: /web/index.php/performance/viewPerformanceModule
            - listitem [ref=f14e80]:
              - link "Dashboard" [ref=f14e81] [cursor=pointer]:
                - /url: /web/index.php/dashboard/index
            - listitem [ref=f14e85]:
              - link "Directory" [ref=f14e86] [cursor=pointer]:
                - /url: /web/index.php/directory/viewDirectory
            - listitem [ref=f14e90]:
              - link "Maintenance" [ref=f14e91] [cursor=pointer]:
                - /url: /web/index.php/maintenance/viewMaintenanceModule
            - listitem [ref=f14e96]:
              - link "Claim" [ref=f14e97] [cursor=pointer]:
                - /url: /web/index.php/claim/viewClaimModule
            - listitem [ref=f14e105]:
              - link "Buzz" [ref=f14e106] [cursor=pointer]:
                - /url: /web/index.php/buzz/viewBuzz
    - banner [ref=f14e110]:
      - generic [ref=f14e111]:
        - generic [ref=f14e112]:
          - text: 
          - heading "Buzz" [level=6] [ref=f14e114]
        - link [ref=f14e116]:
          - /url: https://orangehrm.com/open-source/upgrade-to-advanced
          - button "Upgrade" [ref=f14e117] [cursor=pointer]
        - list [ref=f14e123]:
          - listitem [ref=f14e124]:
            - generic [ref=f14e125] [cursor=pointer]:
              - img "profile picture" [ref=f14e126]
              - paragraph [ref=f14e127]: Carl user
              - generic [ref=f14e128]: 
      - navigation "Topbar Menu" [ref=f14e130]:
        - list [ref=f14e131]:
          - button "" [ref=f14e133] [cursor=pointer]
  - generic [ref=f14e135]:
    - generic [ref=f14e137]:
      - generic [ref=f14e139]:
        - paragraph [ref=f14e140]: Buzz Newsfeed
        - generic [ref=f14e141]:
          - generic [ref=f14e142]:
            - img "profile picture" [ref=f14e144]
            - generic [ref=f14e147]:
              - textbox "What's on your mind?" [ref=f14e148]
              - button "Post" [ref=f14e150] [cursor=pointer]
          - separator [ref=f14e151]
          - generic [ref=f14e152]:
            - button "Share Photos" [ref=f14e153] [cursor=pointer]
            - button "Share Video" [ref=f14e155] [cursor=pointer]
        - generic [ref=f14e157]:
          - button " Most Recent Posts" [ref=f14e158] [cursor=pointer]:
            - generic [ref=f14e159]: 
            - text: Most Recent Posts
          - button " Most Liked Posts" [ref=f14e160] [cursor=pointer]:
            - generic [ref=f14e161]: 
            - text: Most Liked Posts
          - button " Most Commented Posts" [ref=f14e162] [cursor=pointer]:
            - generic [ref=f14e163]: 
            - text: Most Commented Posts
      - paragraph [ref=f14e168]: Upcoming Anniversaries
    - generic [ref=f14e169]:
      - paragraph [ref=f14e170]: OrangeHRM OS 5.9
      - paragraph [ref=f14e171]:
        - text: © 2005 - 2026
        - link "OrangeHRM, Inc" [ref=f14e172] [cursor=pointer]:
          - /url: http://www.orangehrm.com
        - text: . All rights reserved.
```