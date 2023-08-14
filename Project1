---
title: 'Analysis of top 100 transfer fee in past 50 years'
date: 2014-08-14
permalink: /posts/2014/08/blog-post-3/
tags:
  - Football
  - Data Analysis
  - Python
---

# Analysis of top 100 transfer fee in past 50 years

In this comprehensive analysis, we delve into transfer data extracted from the Transfermarkt website, spanning from the 1973/1974 season to the present, encompassing the 2023/2024 season.

**Motivation**: Over the past 15 years, transfer fees have skyrocketed due to various factors, such as business-minded individuals investing in football clubs. Entrepreneurs have taken a keen interest in the football club business, leading to club acquisitions. Prominent examples include Manchester City in 2008, PSG in 2011, and more recently in 2021, Newcastle, which were bought by an Arabian billionaire. Given this context, our analysis aims to uncover insights from the top 100 transfers across the last 50 seasons, spanning from 1973 to 2024. While our data covers transfers from all over the world, the transfer generally happened in Europe and South America, not because we chose to, but because the top 100 transfers have mostly happened in these places. Limiting our scope to the top 100 transfers is a practical choice due to the challenges of collecting comprehensive data due to its sheer volume and privacy considerations. Our main goals include understanding how transfer fees have grown, identifying dominant player positions, as well as examining the roles of nationality and league affiliations. We're also looking into whether various factors like a player's age, statistics from the season before the transfer (like appearances, goals, and assists), or their nationality influence transfer fees. Additionally, we'll explore how external events like the establishment of the Premier League, the COVID-19 pandemic, and the occurrence of World Cup tournaments might have affected transfer trends and fee structures.

By digging into this extensive dataset and putting it into the context of historical events, we aim to get a full picture of how transfer fees have evolved and the different factors that play a role in shaping this ever-changing landscape.


![image](https://github.com/manburst/JirachoteK.github.io/assets/68594551/a9c23425-0233-4320-905d-1acebf86d82a)

source : Dailymail

Disclaimer: This analysis is a personal project with no intention of making a profit. It's purely for practicing and honing skills.


## Part 1: Collecting the data by web scraping with beautiful soup

![image](https://github.com/manburst/JirachoteK.github.io/assets/68594551/edd05cb5-fd59-44db-9317-d0feec5a9a76)

![image](https://github.com/manburst/JirachoteK.github.io/assets/68594551/9d3134e1-ab70-4ee8-925a-2b60ce235a9f)

For the data collection process, I use BeautifulSoup4 to scrape information from the top transfers in each season. Fortunately, these transfers were neatly organized in tables, with each page has 25 players, making the scraping process relatively straightforward. However, this simplicity presented a potential complication down the line. To ensure accurate data extraction, I recommend employing the 'find all' tag. This approach guarantees the comprehensive retrieval of data.

![image](https://github.com/manburst/JirachoteK.github.io/assets/68594551/9ba17d15-b725-4496-8e9e-4c9d086fe9da)


Additionally, we undertook the task of amassing player statistics from the season prior to their transfers, encompassing metrics such as appearances, goals, and assists. An essential lesson emerged from this endeavor: the extraction process had the potential to become time-intensive, as the code navigates through each page and accesses player profiles to retrieve their pre-transfer season statistics. This prolonged runtime could potentially lead to connection errors. To circumvent this, I suggest implementing a random time delay ranging from 1 to 3 seconds for every player and page accessed. This strategy can mitigate connection disruptions and facilitate smoother data collection.

![image](https://github.com/manburst/JirachoteK.github.io/assets/68594551/74d06635-9c43-4afa-919d-4d56cf431047)
![image](https://github.com/manburst/JirachoteK.github.io/assets/68594551/a5f7e85e-2341-4dc4-acaa-acf28998d9a8)

Upon obtaining the results, the subsequent step involved selecting the top 100 transfers and combine the data from various seasons into a single file for further analysis.

## Part 2 Data cleaning

![Alt Text](https://media.tenor.com/2hlgqz4Kw9IAAAAC/great-power-great-responsibility.gif)

With Great data come with great responsibility (to cleaning) Uncle Ben as Data analyst said

Upon completing the scraping process, a glaring challenge became evident—the data was far from tidy!:

* Player Name and Position Fusion: The player's name and their respective position were muddled together within a single column.

* Club and League Conflation: The club and league information were intertwined in the same column, while the club's nationality was curiously absent.

* Empty 'Nat' Column: Curiously, the 'Nat' (Nationality) column contained null entries. Thankfully, nationality data had been collected independently.

Here's the roadmap for cleaning the data:


1. Data Separation: Divide the merged player name and position into distinct columns.

2. Fee Standardization: Convert transfer fees into numeric format. Additionally, transform fee values from thousands (K) to millions (M) for consistency.

3. Season Format Transformation: Convert abbreviated season entries (e.g., 92/93) into a more comprehensible full format (e.g., 1992/1993). This modification is crucial to ensure accurate sorting.

4. Incorporating League Nationality: Append the corresponding league nationality to enhance the contextual understanding of club data.

5. Null Data and Loan Player Removal: Eliminate rows with null data and those related to loaned players, streamlining the dataset.

By undertaking these steps, we'll successfully navigate the complexities of the messy data, transforming it into a more structured and usable format for subsequent analysis.

## Part 3 Data visualization and analysis

![image](https://github.com/manburst/JirachoteK.github.io/assets/68594551/806c42fe-c1b2-49f6-bbe0-e2dedc187914)

### Overall statistic of Age and Transfer fee
The average age of transfers settles at 24, reflecting the prevalent trend of football clubs seeking to secure young and promising talent to reinforce their squads. This propensity for recruiting younger players is driven by the desire to raise and develop potential future stars.

However, a remarkable outlier emerges with Cristiano Ronaldo's transfer from Juventus to Manchester United at the age of 36. This transfer stands out as an exception to the youth-focused pattern, showcasing the enduring impact of seasoned players who continue to make significant contributions even in the latter stages of their careers.

![image](https://github.com/manburst/JirachoteK.github.io/assets/68594551/9191dfe3-fcf7-402e-bedf-0b9db03269f6)


Source The mirror

Another notable player that contributes to the unique range of ages in football transfers (but not include in this analysis) is Kazuyoshi Miura, known as "King Kazu." As the oldest active football player in the world, Miura has defied age expectations by continuing to compete professionally well into his 50s. His remarkable journey showcases not only his enduring passion for the sport but also challenges conventional notions of player longevity in the football realm.

![image](https://github.com/manburst/JirachoteK.github.io/assets/68594551/36d39060-fe57-4b7c-af77-9c63eb9706ff)
Source The Guardian

In contrast, the minimum age observed in these football transfers is 16, underscoring the diverse range of player ages involved. This renewed emphasis on youth aligns with modern football trends, where emerging talents hold a stronger sway than in earlier times. Jude Bellingham's move from Birmingham to Dortmund at the age of 16 exemplifies this shift, reflecting football's focusing on develop young prospects for a brighter future.


Several crucial reasons drive the  strategy invest in youth. Firstly, it's an investment in the long run, grooming talents within the club's system to align with its values. Secondly, it's financially cautious, as young prospects come at lower fees, allowing for resource sustainability. Thirdly, young talents carry immense potential, developing rapidly and eventually contributing significantly. Additionally, it reinforces the club's identity, resonating with local fans. Lastly, young players enrich squad competition and depth, even if not starting.

![image](https://github.com/manburst/JirachoteK.github.io/assets/68594551/a8ebdf8f-4955-4990-8ad1-0a447e030cae)
Source The Mirror

Jude Bellingham has made his transfer at age only 16

The mean transfer fee of 10 million euros illustrates the central range of fees, with a substantial standard deviation around 14.58 highlighting the wide distribution from this average. This variation results from various key factors: larger clubs with more financial resources tend to engage in higher fee transfers, highly talented players command elevated fees, market dynamics and demand contribute to fee fluctuations, players with potential garner substantial fees, and clubs aiming for immediate success are willing to invest more. Simultaneously, the record-breaking transfer fee. The record-breaking fee for Neymar's move from Barcelona to PSG at 222 million euros results from his stature, market conditions, and PSG's strategic goals, demonstrating the convergence of player excellence, market trends, and club aspirations.

![image](https://github.com/manburst/JirachoteK.github.io/assets/68594551/5265160e-93da-4d41-95bc-8b43fcf91d2e)
Source Goal

First let see the overall transfer growth

![image](https://github.com/manburst/JirachoteK.github.io/assets/68594551/4eb85191-c745-4e74-a0c0-84533654c576)

### Transfer fee growth by season

Let's see the overall transfer fee growth. At the outset, transfer fees appeared relatively stable, 1974 and 1978 World Cups likely contributed to the increased attention on the sport, with transfer fees rising in the immediate aftermath of these tournaments, gradually escalating around 1986 due to World Cups in Spain (1982) and Mexico (1986), where increased investment in South American talents and new interest in football worldwide might have spurred growth. 

![image](https://github.com/manburst/JirachoteK.github.io/assets/68594551/1f3d63c9-deb9-4d2a-8f68-42e7266baf56)
Source Futbol Retro

Beckenbauer & Cruyff in World Cup 1974

![image](https://github.com/manburst/JirachoteK.github.io/assets/68594551/222f6d65-ed8a-4533-9e75-2f7595c4a08b)

Maradona in World Cup 1986

A significant turning point arrived with the establishment of the Premier League which the increasing television rights and sponsorship deals have led to more money flowing into the game and the rising impact of UEFA Champions League by changed their name from European Cup in 1992 further accelerated this growth. This era also saw significant increases following the 1990 World Cup in Italy and the 1994 World Cup in the USA, reflecting the globalization and booming football industry, leading to an infusion of capital that triggered exponential growth. 

![image](https://github.com/manburst/JirachoteK.github.io/assets/68594551/9b610ea6-930c-4de2-82f0-0ae73d9aa0ee)

Source Football Kit Archive

First EPL logo

![image](https://github.com/manburst/JirachoteK.github.io/assets/68594551/fb6fb45a-304f-49fd-b7b8-3f95560a28cb)

Source UEFA.com

Marseille is the first Europe champion after European Cup rebranded to UCL

The 2001/2002 season marks a climax, highlighted by Zidane's transfer from Juventus to Real Madrid for a record-breaking 77 million euros and Gianluigi Buffon's move from Parma to Juventus also sets a record for goalkeeper fees at that time, standing at around 50 million euros. The 21st century began with a continuation of rapid growth, but the average transfer fees were affected by global events like the dot-com bubble and the collapse of ITV Digital in the UK, which likely overshadowed the impact of the 2002 World Cup. Recovery was noted in the mid-2000s, coinciding with the successful 2006 World Cup in Germany. Following this peak, transfer fees experience a dip but subsequently show a rising trend that eventually surpasses the 2001 peak. The global financial crisis of 2007-2009 slowed down the growth, but the steady rise resumed through the 2010s. The influence of World Cups during this period, such as those held in South Africa (2010), Brazil (2014), and Russia (2018), became more inconsistent, possibly reflecting the multifaceted nature of football's economy and other dominant factors. This resurgence includes remarkable transfers like Gareth Bale's and Neymar's.

![image](https://github.com/manburst/JirachoteK.github.io/assets/68594551/fc9e8075-5dd3-4b00-aa47-fc358f2cf831)

Source Marca

Zidane vs Buffon

![image](https://github.com/manburst/JirachoteK.github.io/assets/68594551/66160cd8-fd57-4785-95ef-b94c52cb0ded)

Source iFunny Football Brazil

As the internet started becoming more accessible, football also turned into a meme.

The COVID-19 pandemic in the 2020/2021 and 2021/2022 seasons results in a significant fee reduction due to football clubs losing income from ticket sales and merchandise.The COVID-19 pandemic marked a significant decrease in transfer fees during 2019/2020-2020/2021, impacting clubs' spending due to lost revenues. A subsequent recovery was observed, with an increase following the unique winter World Cup in Qatar in 2022. The player who made transfer after World Cup 2022 such as Enzo Fernandez, Cody Gakpo and Alexis Mac Allister. 

![image](https://github.com/manburst/JirachoteK.github.io/assets/68594551/6cad24d4-93ac-4adb-bae0-2ff4aa00d3bc)

Source EPSN

Empty stands in Anfield

Nevertheless, financially robust clubs such as Manchester City, Chelsea, and PSG continue to make acquisitions. The 2022/2023 season sees geopolitical events affecting football, as Russia's conflict with Ukraine leads to Roman Abramovich's Chelsea ownership being frozen. The club is eventually sold to American businessman Todd Boly, who infuses substantial investment and triggers a significant spending spree of nearly 600 million euros on new players. Even I use sugar daddy cheat in FM game not like that!.  

![image](https://github.com/manburst/JirachoteK.github.io/assets/68594551/c3255f97-5edd-4e05-b2c8-f21f375a4354)

Source FOX Soccer

![Alt Text](https://media.tenor.com/eh3453yharwAAAAC/batman-im-rich.gif)

“What is your superpower?” The Flash 

“I’m rich” Batman

### Market Value VS Transfer fee

Throughout this timeline, the dynamics of the football transfer market intertwine with various events, from league formations and wars to owner changes. These factors collectively shape the trajectory of transfer fees, underscoring the sport's ever-evolving nature. The average transfer fee data across this period reveals a complex interplay between global football events, particularly World Cups, and the broader economic landscape. Early World Cups elevated transfer fees, while the influence of inflation has contributed to the overall escalation, highlighting the intricate connection between football's economic dynamics and global financial trends. Additionally, league formations, club ambitions, and geopolitical events have significantly molded the transfer landscape, underscoring how transfer fees are shaped by interconnected variables within football's evolving economic ecosystem.

The introduction of market value in 2002/2003 aimed to assess a player's worth based on performance, age, and nationality. While market value and transfer fee are closely related, it's evident that actual fees often surpass estimated values. Anyway they has robust correlation together, with a coefficient of determination (R) at 0.94.

![image](https://github.com/manburst/JirachoteK.github.io/assets/68594551/93071aaf-b90b-44e1-b3a8-f1281d5d13c6)


![image](https://github.com/manburst/JirachoteK.github.io/assets/68594551/64eb40b6-a876-492e-a84a-1af4e5f51d9b)

The maximum transfer value also follows the average trend. A remarkable surge occurred in 2017/2018 and 2018/2019 when PSG's acquisition of Neymar significantly raised the bar. However, as five years have elapsed, it appears unlikely for such heights to be attained again. Even for players like Mbappe, whose contract is down to one year, it's improbable that Real Madrid would invest more than 200 million euros in his acquisition.

![image](https://github.com/manburst/JirachoteK.github.io/assets/68594551/006918a1-31ad-4a61-bf68-5714b004a520)


![image](https://github.com/manburst/JirachoteK.github.io/assets/68594551/2dc053bd-d16c-4694-af4b-b754ff26811a)

### How Nationality affect transfer fee?

In the bubble chart, each nation is depicted alongside the cumulative sum of transfer fees for their players. England consistently maintains its position as the leader in both transfer purchases and sales, primarily owing to the competitive dynamics of the Premier League and its equitable financial distribution structure. This phenomenon significantly contributes to England's consistent top-ranking status in the UEFA hierarchy. On a separate note, Real Madrid boasts the most prolific record as Champions League title holders, a testament to their unparalleled success on the European stage.

<iframe src="https://htmlpreview.github.io/?https://github.com/manburst/JirachoteK.github.io/blob/0f6c3e9b4a0d2cbf001a3b06255709c1db734d0a/images/Nationality-fee.html" frameborder="0" width="100%" height="500px"></iframe>


Based on the provided data, Brazil leads the list with the highest cumulative transfer fee, amounting to approximately 8.98 billion, followed by France and England, with transfer fees roughly 6.91 billion and 6.44 billion respectively. Several factors could contribute to these findings such as Brazil has been a prolific producer of football talent, often exporting top players to elite clubs around the world. France's football academy development system have been acclaimed for their efficiency and effectiveness. Regarding England, the premium commanded by English players in the transfer market is largely influenced by the homegrown rule. This regulation mandates the inclusion of English players in both youth and senior squads, ensuring a steady influx of local talents. This policy's intent to foster opportunities for domestic players elevates their market value. Additionally, the propensity of English players to predominantly participate in the English league contributes to higher transfer fees, as they are recognized for their consistent performance within their home league. Noteworthy exceptions of English players seeking foreign leagues include figures like Michael Owen, David Beckham, Steve McManaman, and Jude Bellingham, with Real Madrid frequently serving as their destination. This trend reinforces the premium attributed to English players in the transfer market. Countries like Italy and Spain also have strong footballing histories and leagues that attract international talent for let they 
shine on a global stage, to be part of clubs legacy by making history from their story.


### Market Share of Position

We can categorize the various positions into four fundamental groups. It's not surprising that goalkeepers possess the smallest market share, given that each squad typically has only one goalkeeper. Despite their limited quantity, goalkeepers hold significant importance, their unique role as the last line of defense and their ability to impact matches with crucial saves is one of the key of team succession.

![image](https://github.com/manburst/JirachoteK.github.io/assets/68594551/33bf3861-d963-4a8a-8fe2-616ba68691e9)


Continuing the analysis, I explored the subpositions within each category. To enhance clarity, subpositions with less than a 5 percent share were grouped together. Upon examination, a notable pattern emerges: while midfield collectively commands a larger market share than defenders, the center-back position holds a significant portion of this share. Center-forward positions dominant the market share due to their crucial role in scoring goals and coordinating attacks, making them key players who greatly influence match results. Moreover, the skillful and captivating playing style has a significantly impact on their market value. Their ability to entertain the audience make them into clubs iconic figures which can can attract sponsorships, increase club merchandise sales, and other commercial avenues which significantly contributes to club financial growth and sustainability.

![image](https://github.com/manburst/JirachoteK.github.io/assets/68594551/b83895f5-62b1-41e3-b00c-22f13b366f7c)

I manually curated the top 15 nationalities and created a heatmap illustrating the aggregated transfer fees categorized by position and nationality. The standout observation is Brazil's still dominance across almost all positions. England and France follow Brazil in outstanding. From this illustration, top-performing nations possess the ability to raise their young talents into future high-transfer-fee players regardless their position. However, nation in intermidiate level of football, forward and midfiled still dominate others because their stat about goal contribution are tangibly. These players not only boost the club financially through their popularity and image but also attract new fans worldwide, connecting the club internationally, that why they are the crucial key to the club's success.

![image](https://github.com/manburst/JirachoteK.github.io/assets/68594551/60b276a3-98d8-4922-acae-6a92fda6a7c7)


While the overall trend indicates a consistent increase in transfer fees over the years, delving into specific player positions reveals intriguing nuances. Interstingly, the goalkeeper position has an exceptional surge in fees during the 2017/2018 to 2018/2019 seasons. This period witnessed two successive record-breaking transfers: Alisson's move from Roma to Liverpool and Kepa's transfer from Bilbao to Chelsea. Kepa's high fee can be attributed to Chelsea's urgency to replace Thibaut Courtois following his departure, which led to the premium price paid for a swift solution rather than reflective of his intrinsic value.

The 2014/2015 season witnessed a significant milestone when David Luiz's move from Chelsea to PSG set a new record for the highest transfer fee for a defender. This groundbreaking transfer had a ripple effect on subsequent defender transfers, including notable players like Virgil van Dijk, Harry Maguire, and most recently, Gvardiol. The shift in Luiz's transfer fee paradigm subsequently influenced and reshaped the market for defenders, impacting the valuations of prominent talents in the position. This noticeable shift within the defender category contrasts with the forward and midfield positions, which generally follow the market trend of increasing fees due to their substantial market shares and consistent demand.

These deviations within specific positions underscore how various factors, including player availability, club requirements, and market dynamics, can lead to fluctuations in transfer fees within different positions, even as the broader trend of increasing fees persists.

![image](https://github.com/manburst/JirachoteK.github.io/assets/68594551/d0a22aad-5bff-452d-baec-e1cd4d18323b)

![image](https://github.com/manburst/JirachoteK.github.io/assets/68594551/46aa6e3e-6441-4e6e-add4-a5bd87df07ef)

Top transfer of each position, Neymar (Forward), Countinho (Midfiled), Gvaridol (Defender) and Kepa (Goalkeeper)


### Effect of player's age to their price

Let's now explore the relationship between transfer count, age, and player position. On average, players tend to retire around the age of 35. But Goalkeepers often having a higher average retirement age than other positions, typically experience lower transfer fees, sometimes even transferring for free. This might explain their absence from the top 100 transfers of each season. When examining transfer count across positions and age ranges, a consistent pattern emerges. Players in all positions tend to have peak transfer counts within the age range of 20-24, followed by a secondary peak within the 25-29 age range. This aligns with the notion that players within these age ranges possess both peak skill levels and valuable experience, factors that correlate with their market value.

![image](https://github.com/manburst/JirachoteK.github.io/assets/68594551/106e70c2-5090-4766-bb54-55d5513bd185)

Further analyzing the transfer fees across different age groups reveals intriguing insights. Clubs tend to invest in youth through the peak years of defenders and forwards, while they allocate resources to midfielders and goalkeepers during their prime ages of 20-29. However, it's noteworthy that the defender position exhibits an interesting pattern with both an extremely low transfer count and fee, suggesting a potential shorter career span compared to other positions. This could be due to the physically demanding nature of defending, involving intense body contact and tackles, which may lead to wear and tear as players age. This reduced longevity might hinder defenders from extending their careers compared to positions like midfielders and goalkeepers.

In contrast, the forward position continues to command significant attention and transfer fees even at advanced ages. This phenomenon could reflect the enduring value of experienced forwards, whose skills and instincts remain relevant even as they age. This trend showcases the multidimensional factors influencing transfer fees, including position-specific demands, playing style, and the evolving role of players across different stages of their careers.

![image](https://github.com/manburst/JirachoteK.github.io/assets/68594551/659f1c96-479e-4bd6-a1e2-5cc3e7ccd468)


Interestingly, despite the divergent strategies in player departures, there isn't a substantial variance in the average age at which players are transferred across these leagues. The consensus seems to converge around the age of 24, indicating that this stage is an important time for players to make smart career choices. This age appears to strike a balance between having gained valuable experience and skill development, while also being young enough to adapt and contribute effectively to their new teams. This consensus around the age of 24 underscores the significance of timing in the career path of football players, as they seek opportunities that align with their evolving skills and ambitions.

![image](https://github.com/manburst/JirachoteK.github.io/assets/68594551/2f3b852b-0d10-4b72-89dd-479e2b790d41)

To analyze the impact of age on transfer fees, we categorized players into different age ranges and visualized the distribution of transfer fees. Across all age ranges, the prevalent trend is that transfer fees generally stay below 50 million euros. This consistent pattern can be attributed to the varying budget constraints of different clubs. Not all clubs possess the financial capabilities of larger counterparts, leading to a clustering of fees within a relatively narrow range across all age groups. This phenomenon reflects the finiancial realities that influence the distribution of transfer fees.

![image](https://github.com/manburst/JirachoteK.github.io/assets/68594551/31117af4-a50a-4943-b330-7986cf7732e3)

### The Rich League and the farmer league

![image](https://github.com/manburst/JirachoteK.github.io/assets/68594551/3df65c94-e024-44e3-bc5f-4f38a0462644)

Highest league (country) worth

Let's delve into the relationship between the average player age and the leagues of different countries. It's a well-known fact that older footballers seeking a continued presence on the European stage often gravitate towards Italy. This choice is influenced by the league's slower playstyle and reduced game speed compared to other leagues, which can suit the abilities of seasoned players.

Interestingly, in 2016, Saudi Arabia announced its ambitious "Vision 2030" project, encompassing various sectors including sports, with a primary focus on football due to its immense popularity. This initiative prompted notable moves to the Saudi Arabian league, including Cristiano Ronaldo's transfer to Al-Nassr. In 2023, the momentum continued with significant investments that not only saw the acquisition of around 30 players but also a cluster of mid-20s superstars, exemplified by Ruben Neves' joining. The strategy primarily targeted players over 30 and of Muslim faith, as they can more easily adapt to Arab culture. This approach saw established figures such as Mane, Benzema, and Kanté joining Saudi clubs.

![image](https://github.com/manburst/JirachoteK.github.io/assets/68594551/46c10980-df73-4448-833d-029b8345e559)

Even the EPL and Liverpool legend, Stevie G. join Al-Ettifaq FC as manager

In contrast, football landscapes in France, Germany, the Netherlands, and Spain lean towards acquiring youth players or wonderkids to raise and develop into future superstars. These leagues provide promising talents with opportunities to grow and shine, aligning with their emphasis on cultivating the stars of tomorrow. These distinct strategies highlight how different leagues strategically navigate player acquisitions to match their respective goals and trajectories.

![image](https://github.com/manburst/JirachoteK.github.io/assets/68594551/0e002e05-27e4-4c67-94b9-bbb72101152c)


Player departures from various countries' leagues exhibit distinct patterns. In Portugal, Brazil, Argentina, the Netherlands, and France, players often depart at a youthful age, which frequently indicates the emergence of wonderkids or exceptional talents. This trend underscores the emphasis on identifying and developing promising players from a young age, facilitating their growth into standout performers.


Conversely, in leagues such as Italy, England, Spain, and Germany, players are more commonly sold during their mid-20s. This phase typically represents a critical period in a player's development, where their abilities and potential are more sharpen, making them attractive prospects for clubs seeking immediate contributions. This strategy aligns with the competitive nature of these leagues, where established players can swiftly integrate into the demands of top-tier football.

These divergent trends in player departures reflect the diverse philosophies and strategies employed by different leagues to control talent and maintain competitive rosters.

![image](https://github.com/manburst/JirachoteK.github.io/assets/68594551/6b109dda-1b58-4dba-b765-a9d6351af5da)


In terms of the highest fees paid for players, the top five leagues in Europe. This trend is underpinned by the stature and financial muscle of these leagues, resulting in hugh fees for player acquisitions. Conversely, when analyzing the highest fees received from player sales, Portugal and the Netherlands emerge prominently instead of Russia. This could be attributed to the robust talent development systems in these countries, leading to the export of players to various leagues.

In the context of top leagues, their prominent positions in both highest fees paid and received can be traced to several factors. These nations has highly competitive football leagues with rich histories and widespread international reputation. The top clubs from these countries consistently participate in continental competitions, leading to increased exposure and subsequently, higher valuations for their players. Moreover, the strict training systems and emphasis on player development in these leagues yield a continuous stream of talented footballers, further driving up transfer fees.


Russia's high volume of player purchases could be attributed to several factors. The influx of investment and wealthy ownership in certain Russian clubs has injected substantial financial resources into the league. This financial strength enables Russian clubs to compete in the international transfer market for in demand players, resulting in a significant number of purchases.


On the other hand, the notable player sales from Portugal and the Netherlands highlight their roles as talent-producing countries. These nations have a strong reputation for nurturing and cultivating young players through their academy systems. As a result, they often become hotspots for scouting and recruitment by top European clubs. The relatively lower financial capabilities of domestic leagues compared to the wealthier European counterparts make player sales an attractive revenue source for clubs in these countries.

Collectively, these dynamics illustrate how football transfer fees are shaped by many factors, including league competitiveness, player development structures, financial resources, and international market demand.

![image](https://github.com/manburst/JirachoteK.github.io/assets/68594551/c1eabea6-5096-44c8-99fe-3a87e8dac686)


### The Statistics of previous season is not significant key that drive player transfer fee

I tried to establish a relationship between transfer fees and player performance by examining individual parameters such as appearances, goals, and assists. Through scraping data on these metrics, we sought to uncover potential correlations that shed light on how player contributions on the field influence their market value.

There is almost no relationship between appearance and transfer fee, However, we could also see it as players with fewer appearances being unhappy at their current club. Footballers often derive satisfaction from showcasing their skills on the field, as this not only enhances their performance but also boosts their reputation and subsequent market value. Competitive matches offer a platform for players to shine, leading to potential rises in both their fame and overall market worth.

![image](https://github.com/manburst/JirachoteK.github.io/assets/68594551/fdbc7566-7bf7-4c73-b928-c1143f41b1ad)


Focusing specifically on the parameters of goals and assists, our analysis centered on the forward and midfield positions. These positions are more likely to actively contribute to scoring goals compared to other positions. However, our findings revealed that there is minimal, if any, discernible relationship between these performance metrics and transfer fees within these positions. This outcome suggests that while goals and assists are crucial indicators of a player's impact on the game, their influence on transfer fees appears to be limited or complex, taking into account various other factors that contribute to player valuation.

![image](https://github.com/manburst/JirachoteK.github.io/assets/68594551/a304bb9b-faf1-4032-9c11-7b719ec8da14)


![image](https://github.com/manburst/JirachoteK.github.io/assets/68594551/2098c673-16e7-45cb-b268-2be0d176befe)


This underscores that transfer fees are not solely determined by a single parameter. Factors such as dribbles, passing success, headers, free kicks, corners, tackles, and more play a collective role in evaluating a player's value. Furthermore, the goalkeeper position possesses distinct statistics that demand a comprehensive assessment beyond mere statistics.

In our exploration, we also delved into the correlation between goals and assists within each season. It became apparent that the top scorers and assist providers tend to command higher transfer fees. However, this relationship is effect by additional factors like a player's age and the duration left on their contract, which collectively contribute to their overall value and influence the fee they command. This comprehensive view reinforces that the intricacies of player valuation extend beyond isolated performance metrics. Furthermore, our analysis reveal an additional layer of complexity tied to the league a player competes in. Leagues characterized by high competition has higher transfer fees even in instances of lower goal and assist records. This phenomenon underscores the unique impact of league dynamics on player valuation. While certain players may showcase exceptional performance in leagues with lower competition, the transition to a high-stakes environment like the top European leagues can bring about significant adjustments and alterations in their performance and subsequent market value. This finding highlights the intricate interplay between league competitiveness and player valuation, further demonstrating the multifaceted nature of the football transfer market.

![image](https://github.com/manburst/JirachoteK.github.io/assets/68594551/f3061885-27e0-44f3-b842-40b070aed3dd)


The majority of transferred players with the highest goal count primarily find themselves in England. In contrast, the distinction for the highest number of assists belongs to the Netherlands. This pattern indirectly signifies a dynamic relationship between player transfers and the goal-scoring prowess in England, while the Netherlands appears to have a unique influence on the art of creating assists. These findings underline the intricate connections between player movement, on-field performance, and the distinctive characteristics of football leagues across different countries.

![image](https://github.com/manburst/JirachoteK.github.io/assets/68594551/ca12d9b6-67d8-42c4-961b-9bf51c6f6b24)

### Final thought

In conclusion, the analysis of the top 100 football transfer fees over the past 50 years reveals the complex evolution of the sport's economics, weaving together multifaceted insights. The skyrocketing of transfer fees, especially in the 21st century, highlights the fusion of sports with business and globalization, with record-breaking transfers reflecting both club aspirations and market dynamics. A strategic emphasis on younger players emerges as a financial and future-building decision, with the focus on nurturing and acquiring talents around the average age of 24 symbolizing a forward-thinking approach in the sport.

The study also dissects the unique roles and market value of different positions, with midfielders and forwards often commanding the market, and illustrates the influence of nations like Brazil, France and England. This underscores the complexity of player evaluation and the various factors that contribute to their worth. Age-related trends, performance metrics, and country strategies focus on youth provide a detailed look into the diversified approaches in player development and valuation. Economic downturns, geopolitical tensions, and unpredicatable events like COVID-19 have further shaped the unpredictable yet fascinating evolution of transfer fees, connecting the sport with broader social and economic contexts.

The evolving world of football transfers goes beyond just numbers and names, serving as a mirror reflecting the dynamics of business, culture, strategy, and global influences. Understanding these trends offers valuable insights into contemporary socio-economic patterns and human behavior.
