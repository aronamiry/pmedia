const fs = require('fs');
['src/pages/HomePage.tsx', 'src/pages/WorksPage.tsx', 'src/components/ui/ProjectCard.tsx', 'src/components/ui/VideoPlayerModal.tsx'].forEach(f => {
  if(fs.existsSync(f)) {
    let c = fs.readFileSync(f, 'utf8');
    c = c.replace(/<img src="https:\/\/images\.unsplash\.com/g, '<img fetchpriority="high" decoding="async" src="https://images.unsplash.com');
    c = c.replace(/<img \n/g, '<img loading="lazy" decoding="async" \n');
    c = c.replace(/<img src=\{project\.thumbnail\}/g, '<img loading="lazy" decoding="async" src={project.thumbnail}');
    c = c.replace(/<img \n\s*src=\{project\.thumbnail\}/g, '<img loading="lazy" decoding="async" \nsrc={project.thumbnail}');
    fs.writeFileSync(f, c);
  }
});
console.log('Done');
