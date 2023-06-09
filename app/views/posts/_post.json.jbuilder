json.extract! post, :id, :title, :description, :font_color, :background_color, :created_at, :updated_at
json.url post_url(post, format: :json)
