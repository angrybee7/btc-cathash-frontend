// export interface LunarCrushPost {
//     source?: string; // e.g., "twitter"
//     body?: string; // Post content
//     title?: string; // For news endpoints
//     content?: string; // Possible news field
//     description?: string; // Possible news field
//     time?: number; // Unix timestamp
//     url?: string; // Link to post
//     sentiment?: number; // Sentiment score
//     [key: string]: any; // Allow extra fields
// }

// export interface LunarCrushResponse {
//     data: LunarCrushPost[];
//     meta?: {
//         total?: number;
//         next_page?: number;
//     };
// }

export interface LunarCrushPost {
  creator_avatar: string;
  creator_display_name: string;
  creator_name: string;
  creator_followers: number;
  post_title: string;
  post_link: string;
}

export interface LunarCrushResponse {
  data: LunarCrushPost[];
}