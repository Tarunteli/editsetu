/* ══════════════════════════════════════════════
   EDITOR DATA
══════════════════════════════════════════════ */
const EDITORS = [
  {
    id: 1,
    name: 'Arjun Dangi',
    initials: 'AD',
    avatarBg: 'linear-gradient(135deg, #2D7FFF, #8B5CF6)',
    category: 'YouTube Editor',
    categoryKey: 'youtube',
    rating: 4.9,
    reviews: 127,
    experience: '5 Years',
    price: 'contact for pricing',
    tags: ['Long-form', 'Vlogs', 'Tutorials'],
    verified: true,
    profile: 'editors/editor-aryan.html'
  },

    {
    id: 2,
    name: 'Ashish Teli',
    initials: 'AT',
    avatarBg: 'linear-gradient(135deg, #8B5CF6, #ec4899)',
    category: 'Reels Editor',
    categoryKey: 'reels',
    rating: 5.0,
    reviews: 89,
    experience: '3 Years',
    price: 'contact for pricing',
    tags: ['Instagram', 'Trendy', 'Music Sync'],
    verified: true,
    profile: 'editors/editor-Ashish-Teli.html'
  },


  {
    id: 3,
    name: 'Dinesh Teli',
    initials: 'DT',
    avatarBg: 'linear-gradient(135deg, #10b981, #2D7FFF)',
    category: 'Reels Editor',
    categoryKey: 'reels',
    rating: 4.8,
    reviews: 89,
    experience: '1 Years',
    price: 'contact for pricing',
    tags: ['Basic Editing', 'YouTube', 'Reels'],
    verified: true,
    profile: 'editors/editor-Dinesh-teli.html'
  },

  {
    id: 4,
    name: 'Rahul Hati',
    initials: 'RH',
    avatarBg: 'linear-gradient(135deg, #f59e0b, #ef4444)',
    category: 'Reels Editor',
    categoryKey: 'reels',
    rating: 0,
    reviews: 0,
    experience: '3 - 4 Years',
    price: 'contact for pricing',
    tags: ['Instagram', 'Trendy', 'Music Sync'],
    verified: true,
    profile: 'editors/editor-Rahul-hati.html'
  },

  {
    id: 5,
    name: 'Laluram Bhil',
    initials: 'LB',
    avatarBg: 'linear-gradient(135deg, #ec4899, #8B5CF6)',
    category: 'Reels Editor',
    categoryKey: 'reels',
    rating: 0,
    reviews: 0,
    experience: '1 - 2 Years',
    price: 'contact for pricing',
    tags: ['Instagram', 'Trendy', 'Music Sync'],
    verified: true,
    profile: 'editors/editor-Laluram-bhil.html'
  },

{
    id: 6,
    name: 'Roshan Edits',
    initials: 'RE',
    avatarBg: 'linear-gradient(135deg, #ec4899, #8B5CF6)',
    category: 'Reels Editor',
    categoryKey: 'reels',
    rating: 0,
    reviews: 0,
    experience: '3 - 4 Years',
    price: 'Contact for pricing',
    tags: ['Instagram Reels', 'YouTube Shorts', 'Transitions'],
    verified: true,
    profile: 'editors/editor-Roshan-edits.html'
},

{
    id: 7,
    name: 'Mehul Jain',
    initials: 'MJ',
    avatarBg: 'linear-gradient(135deg, #ec4899, #8B5CF6)',
    category: 'Reels Editor',
    categoryKey: 'reels',
    rating: 0,
    reviews: 0,
    experience: '3 - 4 Years',
    price: 'Contact for pricing',
    tags: ['Instagram Reels', 'Transitions', 'Color Correction'],
    verified: true,
    profile: 'editors/editor-Mehul-jain.html'
},

  {
    id: 8,
    name: 'Bhupi Patel',
    initials: 'BP',
    avatarBg: 'linear-gradient(135deg, #ec4899, #8B5CF6)',
    category: 'Multiple Categories',
    categoryKey: 'multiple',
    rating: 'No Ratings Yet',
    reviews: 0,
    experience: '3 - 4 Years',
    price: 'Contact for pricing',
    tags: ['YouTube Videos', 'Instagram Reels', 'Shorts'],
    verified: true,
    profile: 'editors/editor-bhupi-patel.html'
  },

{
    id: 9,
    name: 'Mahender',
    initials: 'M',
    avatarBg: 'linear-gradient(135deg, #06b6d4, #3b82f6)',
    category: 'Reels Editor',
    categoryKey: 'reels',
    rating: 0,
    reviews: 0,
    experience: '1 - 2 Years',
    price: 'Contact for pricing',
    tags: ['Instagram Reels', 'YouTube Shorts', 'Video Editing'],
    verified: true,
    profile: 'editors/Mahender-editor-boy.html'
},


  {
    id: 10,
    name: 'Nilesh Rawat',
    initials: 'NR',
    avatarBg: 'linear-gradient(135deg, #14b8a6, #3b82f6)',
    category: 'Multiple Categories',
    categoryKey: 'multiple',
    rating: 0,
    reviews: 0,
    experience: '3 - 4 Years',
    price: 'Contact for pricing',
    tags: ['YouTube Videos', 'Instagram Reels', 'Shorts'],
    verified: true,
    profile: 'editors/editor-Nilesh-Rawat.html'
},

{
    id: 11,
    name: 'Bhrat',
    initials: 'B',
    avatarBg: 'linear-gradient(135deg, #f97316, #ef4444)',
    category: 'Reels Editor',
    categoryKey: 'reels',
    rating: 0,
    reviews: 0,
    experience: '1 Year',
    price: 'Contact for pricing',
    tags: ['Instagram Reels', 'Shorts', 'Video Editing'],
    verified: true,
    profile: 'editors/editor-Bhrat.html'
},

{
    id: 12,
    name: 'Manish Prajapat',
    initials: 'MP',
    avatarBg: 'linear-gradient(135deg, #8b5cf6, #ec4899)',
    category: 'Multiple Categories',
    categoryKey: 'multiple',
    rating: 0,
    reviews: 0,
    experience: '1 - 2 Years',
    price: 'Contact for pricing',
    tags: ['YouTube Videos', 'Instagram Reels', 'Shorts'],
    verified: true,
    profile: 'editors/editor-Manish-prajapat.html'
},

{
    id: 13,
    name: 'Shubham Prajapt',
    initials: 'SP',
    avatarBg: 'linear-gradient(135deg, #0ea5e9, #6366f1)',
    category: 'Reels Editor',
    categoryKey: 'reels',
    rating: 0,
    reviews: 0,
    experience: '3 - 4 Years',
    price: 'Contact for pricing',
    tags: ['Instagram Reels', 'Transitions', 'Shorts'],
    verified: true,
    profile: 'editors/editor-Shubham-prajapt.html'
},

{
    id: 14,
    name: 'Saksham Rathod',
    initials: 'SR',
    avatarBg: 'linear-gradient(135deg, #22c55e, #3b82f6)',
    category: 'Multiple Categories',
    categoryKey: 'multiple',
    rating: 0,
    reviews: 0,
    experience: '3 - 4 Years',
    price: 'Contact for pricing',
    tags: ['YouTube Videos', 'Instagram Reels', 'Shorts'],
    verified: true,
    profile: 'editors/editor-Saksham-Rathod.html'
}

];

