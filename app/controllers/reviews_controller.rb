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
        if review.valid?
            review.update(review_params)
            render json: review, status: :accepted
        else
            render json: { error: "Review not found" }, status: :not_found
        end
    end

    def delete 
        review = @current_user.reviews.find(id: params[:id])
        if review 
            review.destroy 
            head :no_content
        else
            render json: { error: "Review not found" }, status: :not_found
        end
    end

    private 

    def review_params 
        params.permit(:comment, :rating)
    end

end
