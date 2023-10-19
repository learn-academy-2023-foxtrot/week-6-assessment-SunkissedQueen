# ASSESSMENT 6: Rails Commenting Challenge

# Add comments to the Rails Blog Post Challenge
# Explain the purpose and functionality of the code directly below the 10 comment tags


# FILE: app/controller/blog_posts_controller.rb

# FSWD Adrian
# ---1)BlogPost class that is created when the command $rails g BlogPosts is created in terminal. This class also inherits from the Application controller class. 
class BlogPostsController < ApplicationController
  def index
    # ---2) Allows all data that was added the BlogPost controller to be seen on the main page of the rails app.
    @posts = BlogPost.all
  end

  # ---3) Will display the specific blog information related to the id that is given into the url. 
  def show
    @post = BlogPost.find(params[:id])
  end

  # ---4)Makes a new blog post as a form
  def new
    @post = BlogPost.new
  end

  def create
    # FSWD Xe
    # ---5) we have an instance variable which is a @post and it is assigned to creating an entrie with an assigned param = blog_post_params (which, on the other hand, is passing keys:values where keys that we pass are allowed to be edited, furthermore it is created within a PRIVATE method as the keys that we are passing in there are the only thing that user is allowed to change and edit, we don't want a user to edit what we don't want the user to edit) 
    @post = BlogPost.create(blog_post_params)
    if @post.valid?
      redirect_to blog_post_path(@post)
    end
  end

  def edit
    # ---6) we have yet another instance variable which is a @post and it is assigned to find a particular db entrie and display that entrie for edit. The EDIT restful rout goes hand in hand with update. 
    @post = BlogPost.find(params[:id])
  end

  def update
    @post = BlogPost.find(params[:id])
    # ---7) this instance variable allows us to update the db entrie by providing what key:values are alowed to be edited in param that is passed within the private method of the code. 
    @post.update(blog_post_params)
    if @post.valid?
      redirect_to blog_post_path(@post)
    end
  end

  def destroy
    @post = BlogPost.find(params[:id])
    if @post.destroy
      # FSWD Roniel
      # ---8) allows user to delete blog post.
      redirect_to blog_posts_path
    end
  end

  # ---9) allows user to has access to data entries inside appilcation
  private
  def blog_post_params
    # ---10) allows blog post to require a title and content.
    params.require(:blog_post).permit(:title, :content)
  end
end
