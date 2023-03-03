class GamesController < ApplicationController

    def index 
        games = Game.all
        render json: games, include: :reviews, status: :created
    end

    def create 
        game = Game.create(game_params)
        if game.valid? 
            render json: game, status: :created
        else
            render json: { errors: ["Unprocessable Entity"] }, status: :unprocessable_entity
        end
    end

    private 

    def game_params 
        params.permit(:title, :image_url, :description, :developer)
    end

end
