class ReviewsController < ApplicationController

    def show 
        review = Review.find(id: params[:id])
        render json: review, status: :ok 
    end 

    def index
        reviews = Review.all 
        render json: reviews, status: :ok
    end
    
    def create
        review = @current_user.reviews.create(review_params)
        if review.valid?
            render json: review, status: :created 
        else
            render json: { errors: ["Unprocessable Entity"] }, status: :unprocessable_entity
        end
    end

    def update
        review = @curent_user.reviews.find(id: params[:id])
        review.update(review_params)
        if review.valid?
            render json: review, status: :accepted
        else
            render json: { errors: ["Unprocessable Entity"] }, status: :unprocessable_entity
        end
    end

    def delete 
        review = @current_user.reviews.find(id: params[:id])
        review.delete 
        head :no_content
    end

    private 

    def review_params 
        params.permit(:comment, :rating)
    end

end
